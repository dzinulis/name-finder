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
        <>
            <h3 style={{ maxWidth: 450, display: 'flex', justifyContent: 'center' }}>Vārda dzimte:</h3>
            <div style={{ maxWidth: 450, display: 'flex', justifyContent: 'center' }}>

                <Checkbox.Group
                    options={genderOptions}
                    value={genderValue}
                    onChange={onGenderChange}
                />
            </div>
        </>
    )
}

export default GenderCheckbox;

// const setGenderValue: (value: React.SetStateAction<string[]>) => void