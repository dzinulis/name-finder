import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { fetchNames } from '../api/fetchNames';
import { NameList } from '../components/NameList';
import GenderCheckbox from '../components/GenderCheckbox';
import MonthCheckbox from '../components/MonthCheckbox';
import LengthSlider from '../components/LengthSlider';
import SortRadioButtons from '../components/SortRadioButtons';
import SortDirectionRadioButtons from '../components/SortDirectionRadioButtons';
import sortAndFilter from '../api/sortAndFilter';

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

  return (
    <>
      <div>
        <GenderCheckbox genderValue={genderValue} setGenderValue={setGenderValue} />
        <MonthCheckbox monthValue={monthValue} setMonthValue={setMonthValue} />
        <LengthSlider minLength={minLength} maxLength={maxLength} setMinLength={setMinLength} setMaxLength={setMaxLength} />
        <SortRadioButtons sortValue={sortValue} setSortValue={setSortValue} />
        <SortDirectionRadioButtons sortDirection={sortDirection} setSortDirection={setSortDirection} />
        {status === "success" ? (
          NameList(sortAndFilter({ genderValue, monthValue, minLength, maxLength, sortValue, sortDirection, data }), true)
        ) : (
          <h2> Loading... </h2>
        )
        }
      </div>
    </>
  )
}