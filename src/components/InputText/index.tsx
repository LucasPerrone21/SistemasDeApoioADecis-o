import './InputText.css'

interface InputTextProps {
  label: string;
  placeholder?: string;
  inputId: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  formatter?: (value: string) => string;
}

export default function InputText ({ label, placeholder = "", inputId, onChange, value = "", type = "text" }: InputTextProps) {
        return (
            <div className='inputText'>
              <label htmlFor={inputId}>
                {label}
              </label>
              <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
              <span className="errorMessage"></span>
            </div>
          );
        }