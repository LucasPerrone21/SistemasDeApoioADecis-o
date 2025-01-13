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
    shower?: string;
    formatter?: null | ((value: string) => string);
}

function decideShower(min: string|undefined, max: string|undefined, shower?: string, value: string = '', formatter: null | ((value: string) => string) = null) {
    if (shower) {
        return shower;
    }
    else if (formatter) {
        return formatter(value);
    }

    return `${min} | ${max}`;
}

export default function InputSlide({ label, inputId, onChange, value = "", min, max, desc, formatter=null , shower}: InputSlideProps): JSX.Element {
    return (
        <div className='inputSlide'>
            <div>
            <label htmlFor={inputId}>
                {label}
            </label>
            <span>{decideShower(min, max, shower, value, formatter)}</span>
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