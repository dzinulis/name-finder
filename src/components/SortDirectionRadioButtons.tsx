import { Radio, RadioChangeEvent } from "antd";

const sortDirectionOptions = [
    { label: 'Augoši', value: 1 },
    { label: 'Dilstoši', value: -1 },
];

interface SortDirectionProps {
    sortDirection: number;
    setSortDirection: (value: React.SetStateAction<number>) => void
}

function SortDirectionRadioButtons({ sortDirection, setSortDirection }: SortDirectionProps) {
    const onSortDirectionChange = ({ target: { value } }: RadioChangeEvent) => {
        setSortDirection(value);
    };

    return (
        <div>
            <Radio.Group
                options={sortDirectionOptions}
                onChange={onSortDirectionChange}
                value={sortDirection}
                optionType="button"
                buttonStyle="solid"
                style={{ margin: '0 16px' }}
            />
        </div>
    )
}

export default SortDirectionRadioButtons;