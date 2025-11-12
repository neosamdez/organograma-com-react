import './Dropdown.css'

interface DropdownProps {
    onChanged: (valor: string) => void
    label: string
    mandatory: boolean
    valor: string
    itens: string[]
}

const Dropdown = ({
    onChanged, 
    mandatory, 
    valor, 
    itens, 
    label
 }: DropdownProps) => {
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select 
                onChange={event => 
                onChanged(event.target.value)} 
                required={mandatory} 
                value={valor}>
                    <option value ="">Selecione</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default Dropdown; 