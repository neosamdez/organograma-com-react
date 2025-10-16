import './Field.css'



const Field = ({type = 'text', label, placeholder, valor, onChanged, mandatory = false}) => {


    const typed = (event) => {
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