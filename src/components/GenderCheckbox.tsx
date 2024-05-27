import { Checkbox, GetProp } from "antd";

const genderOptions = [
    { label: 'Vīriešu', value: 'male' },
    { label: 'Sieviešu', value: 'female' },
];

interface GenderProps {
    genderValue: string[];
    setGenderValue: (value: React.SetStateAction<string[]>) => void
}

function GenderCheckbox({ genderValue, setGenderValue }: GenderProps) {

    const onGenderChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        setGenderValue(checkedValues.map(x => x.toString()));
    };

    return (
        <div>
            <h3>Dzimums:</h3>
            <Checkbox.Group
                options={genderOptions}
                value={genderValue}
                onChange={onGenderChange}
            />
        </div>
    )
}

export default GenderCheckbox;

// const setGenderValue: (value: React.SetStateAction<string[]>) => void