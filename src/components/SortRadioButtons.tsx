import { Radio, RadioChangeEvent } from "antd";

const sortOptions = [
    { label: 'Pēc datuma', value: 'id' },
    { label: 'Alfabētiski', value: 'name' },
    { label: 'Pēc garuma', value: 'namelength' },
];

interface sortProps {
    sortValue: string;
    setSortValue: (value: React.SetStateAction<string>) => void
}

function SortRadioButtons({ sortValue, setSortValue }: sortProps) {
    const onSortChange = ({ target: { value } }: RadioChangeEvent) => {
        setSortValue(value);
    };

    return (
        <div>
            <Radio.Group
                options={sortOptions}
                onChange={onSortChange}
                value={sortValue}
                optionType="button"
                buttonStyle="solid"
            />
        </div>
    )
}

export default SortRadioButtons;