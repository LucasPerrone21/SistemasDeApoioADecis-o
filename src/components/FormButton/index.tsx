import './FormButton.css'

interface FormButtonProps {
    label: string
    icon?: string
}

export default function FormButton ({ label, icon}: FormButtonProps) {
    

    return (
        <button className="formButton">
            <span>{label}</span>
            {icon && <img src={icon}/>}
        </button>
    )
}