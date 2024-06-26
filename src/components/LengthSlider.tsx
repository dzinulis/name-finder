import { InputNumber, InputNumberProps, Slider } from "antd";
import { SliderRangeProps } from "antd/es/slider";

interface LengthSliderProps {
    minLength: number;
    maxLength: number;
    setMinLength: (value: React.SetStateAction<number>) => void
    setMaxLength: (value: React.SetStateAction<number>) => void
}

function LengthSlider({ minLength, maxLength, setMinLength, setMaxLength }: LengthSliderProps) {
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

    return (
        <>
            <h3 style={{ display: 'flex', justifyContent: 'center' }}>Vārda garums:</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

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

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Slider
                    range
                    min={3}
                    max={11}
                    value={[minLength, maxLength]}
                    onChange={onSliderChange}
                    style={{ width: 300, display: 'flex', justifyContent: 'center' }}
                />
            </div>
        </>
    )
}

export default LengthSlider;