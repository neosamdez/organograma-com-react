import "./Forms.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";


const Forms = (props) => {


    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')


    const toSave = (event) => {
        event.preventDefault()
        props.onPlayerRegistered({
            nome,
            imagem,
            cargo,
            time
        })  
        setNome('')
        setImagem('')
        setCargo('')
        setTime('') 
    }

    return (
        <section className="forms">
            <form onSubmit={toSave}>
                <h2> Prencha os dados do time </h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    onChanged={valor => setNome(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Link da imagem aqui"
                    valor={imagem}
                    onChanged={valor => setImagem(valor)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Cargo principal"
                    valor={cargo}
                    onChanged={valor => setCargo(valor)}
                />
                <Dropdown 
                    mandatory={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    onChanged={valor => setTime(valor)}
                />               
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}


export default Forms;