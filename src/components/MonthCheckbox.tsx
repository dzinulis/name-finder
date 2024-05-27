import { Checkbox, GetProp } from "antd";

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

interface MonthProps {
    monthValue: number[];
    setMonthValue: (value: React.SetStateAction<number[]>) => void
}

function MonthCheckbox({ monthValue, setMonthValue }: MonthProps) {

    const onMonthChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        setMonthValue(checkedValues.map(x => parseInt(x.toString())));
    };
    return (
        <div>
            <h3>Mēnesis:</h3>
            <Checkbox.Group
                options={monthOptions}
                value={monthValue}
                onChange={onMonthChange}
            />
        </div>
    )
}

export default MonthCheckbox;