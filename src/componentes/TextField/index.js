import './TextField.css'



const TextField = (props) => {


    const typed = (event) => {
        props.onChanged(event.target.value)
    } 

    return (
        <div className="text-field">   
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={typed} 
                required={props.mandatory} 
                placeholder={props.placeholder} 
            />
        </div>
        
    )
}

export default TextField