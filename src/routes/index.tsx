import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { GetProp, Checkbox, InputNumberProps, RadioChangeEvent, InputNumber, Slider, Radio } from 'antd';
import { SliderRangeProps } from 'antd/es/slider';
import { useState } from 'react';
import { fetchNames, NameInfo } from '../api/fetchNames';
import { NameList } from '../components/NameList';

export const Route = createFileRoute('/')({
  component: nameFilter
})

function nameFilter() {
  const [genderValue, setGenderValue] = useState(['male', 'female']);
  const [monthValue, setMonthValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [minLength, setMinLength] = useState(3);
  const [maxLength, setMaxLength] = useState(11);
  const [sortValue, setSortValue] = useState('id');
  const [sortDirection, setSortDirection] = useState(1);

  const { data, status } = useQuery({
    queryKey: ['names'],
    queryFn: fetchNames
  })

  const genderOptions = [
    { label: 'Vīriešu', value: 'male' },
    { label: 'Sieviešu', value: 'female' },
  ];

  const monthOptions = [
    { label: 'Jan.', value: 1 },
    { label: 'Feb.', value: 2 },
    { label: 'Mar.', value: 3 },
    { label: 'Apr.', value: 4 },
    { label: 'Mai.', value: 5 },
    { label: 'Jūn.', value: 6 },
    { label: 'Jūl.', value: 7 },
    { label: 'Aug.', value: 8 },
    { label: 'Sep.', value: 9 },
    { label: 'Okt.', value: 10 },
    { label: 'Nov.', value: 11 },
    { label: 'Dec.', value: 12 },
  ];

  const sortOptions = [
    { label: 'Pēc datuma', value: 'id' },
    { label: 'Alfabētiski', value: 'name' },
    { label: 'Pēc garuma', value: 'namelength' },
  ];

  const sortDirectionOptions = [
    { label: 'Augoši', value: 1 },
    { label: 'Dilstoši', value: -1 },
  ];


  function filterGender(nameInfo: NameInfo): boolean {
    var result: boolean = false;
    for (var x of genderValue) {
      result = result || nameInfo.gender === x;
    }
    return result;
  }

  function filterMonths(nameInfo: NameInfo): boolean {
    var result: boolean = false;
    for (var x of monthValue) {
      result = result || nameInfo.month === x;
    }
    return result;
  }

  function filterLength(nameInfo: NameInfo): boolean {
    return (nameInfo.namelength >= minLength) && (nameInfo.namelength <= maxLength);
  }

  function filterNames(nameInfo: NameInfo): boolean {
    return filterMonths(nameInfo) && filterGender(nameInfo) && filterLength(nameInfo);
  }

  function sortNames(a: NameInfo, b: NameInfo): number {
    switch (sortValue) {
      case "id":
        return (a.id - b.id) * sortDirection;
      case "name":
        return (a.name.localeCompare(b.name, "lv")) * sortDirection;
      case "namelength":
        return (a.namelength - b.namelength) * sortDirection;
      default:
        return 0;
    }
  }

  const onGenderChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    setGenderValue(checkedValues.map(x => x.toString()));
  };

  const onMonthChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    setMonthValue(checkedValues.map(x => parseInt(x.toString())));
  };

  const onMinLengthChange: InputNumberProps['onChange'] = (newValue) => {
    setMinLength(newValue as number);
  };

  const onMaxLengthChange: InputNumberProps['onChange'] = (newValue) => {
    setMaxLength(newValue as number);
  };

  const onSliderChange: SliderRangeProps['onChange'] = (newValues) => {
    setMinLength(newValues[0]);
    setMaxLength(newValues[1]);
  }

  const onSortChange = ({ target: { value } }: RadioChangeEvent) => {
    setSortValue(value);
  };

  const onSortDirectionChange = ({ target: { value } }: RadioChangeEvent) => {
    setSortDirection(value);
  };

  return (
    <>
      <div>
        <h3>Dzimums:</h3>
        <Checkbox.Group
          options={genderOptions}
          defaultValue={['male', 'female']}
          onChange={onGenderChange}
        />
        <h3>Mēnesis:</h3>
        <Checkbox.Group
          options={monthOptions}
          defaultValue={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          onChange={onMonthChange}
        />
        <h3>Vārda garums:</h3>
        <b>No:</b>
        <InputNumber
          min={3}
          max={maxLength}
          style={{ margin: '0 16px' }}
          value={minLength}
          onChange={onMinLengthChange}
        />
        <b>Līdz:</b>
        <InputNumber
          min={minLength}
          max={11}
          style={{ margin: '0 16px' }}
          value={maxLength}
          onChange={onMaxLengthChange}
        />
        <Slider
          range
          min={3}
          max={11}
          value={[minLength, maxLength]}
          onChange={onSliderChange}
        />
        <Radio.Group
          options={sortOptions}
          onChange={onSortChange}
          value={sortValue}
          optionType="button"
          buttonStyle="solid"
        />
        <Radio.Group
          options={sortDirectionOptions}
          onChange={onSortDirectionChange}
          value={sortDirection}
          optionType="button"
          buttonStyle="solid"
          style={{ margin: '0 16px' }}
        />
        {status === "success" ? (
          NameList(data.filter(filterNames).sort(sortNames))
        ) : (
          <h2> Loading... </h2>
        )
        }
      </div>
    </>
  )
}