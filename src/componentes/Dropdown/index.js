import './Dropdown.css'

const Dropdown = ({onChanged, required, valor, itens, label, }) => {
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select 
                onChange={event => 
                onChanged(event.target.value)} 
                required={required} 
                value={valor}>
                    <option value ="">Selecione</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default Dropdown; 