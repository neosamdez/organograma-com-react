import './Field.css'

interface CampoTextoProps {
    type?: 'text' | 'date' | 'email'| 'password' | 'number' | 'color'
    label: string
    placeholder?: string
    valor: string
    mandatory?: boolean
    onChanged: (valor: string) => void
}

const Field = ({
    type = 'text',
    label,
    placeholder,
    valor,
    onChanged,
    mandatory = false
}: CampoTextoProps) => {

    const typed = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChanged(event.target.value)
    }

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={typed}
                required={mandatory}
                placeholder={placeholder}      
            />
        </div>
    )
}

export default Field
