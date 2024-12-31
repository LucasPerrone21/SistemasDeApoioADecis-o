import './InputSlide.css';

interface InputSlideProps {
    label: string;
    inputId: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    min?: string;
    max?: string;
    step?: string;
    desc?: string;
}

export default function InputSlide({ label, inputId, onChange, value = "", min, max, desc }: InputSlideProps): JSX.Element {
    return (
        <div className='inputSlide'>
            <div>
            <label htmlFor={inputId}>
                {label}
            </label>
            <span>{`${min} - ${max}`}</span>
            </div>
            <input
                id={inputId}
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
            <span className='desc'>{desc}</span>
        </div>
    );
}