import './InputNumber.css'

interface InputNumberProps {
    label: string
    inputId: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export default function InputNumber ({ label, inputId, onChange, value}: InputNumberProps) {

    function handleIncrement() {
        const currentValue = Number(value);
        if (currentValue < 2) return onChange({target: {value: String(2)}} as React.ChangeEvent<HTMLInputElement>);
        onChange({target: {value: String(currentValue + 1)}} as React.ChangeEvent<HTMLInputElement>)
    }

    function handleDecrement() {
        const currentValue = Number(value);
        if (currentValue <= 2) return onChange({target: {value: String(2)}} as React.ChangeEvent<HTMLInputElement>);
        onChange({target: {value: String(currentValue - 1)}} as React.ChangeEvent<HTMLInputElement>)
    }


    return (
        <div className="inputNumber">
            <label htmlFor={inputId}>{label}</label>
            <div>
                <span onClick={handleDecrement}>-</span>
                <input type="number" id={inputId} onChange={onChange} value={value}/>
                <span onClick={handleIncrement}>+</span>
            </div>
        </div>
    )
}