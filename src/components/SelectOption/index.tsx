import './SelectOption.css';

interface SelectOptionProps {
  label: string;
  inputId: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectOption({ label, inputId, options, onChange }: SelectOptionProps): JSX.Element {
  return (
    <div className='selectOption'>
      <label htmlFor={inputId}>
        {label}
      </label>
      <select id={inputId} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}