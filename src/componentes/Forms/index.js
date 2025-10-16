import "./Forms.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";


const Forms = ({onPlayerRegistered, times, onRegisteredTime}) => {


    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    const toSave = (event) => {
        event.preventDefault()
        onPlayerRegistered({
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
                <h2> Prencha os dados do player </h2>
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
                    itens={times}
                    valor={time}
                    onChanged={valor => setTime(valor)}
                />               
                <Button>
                    Criar card
                </Button>
            </form>
            
            <form onSubmit={(event => {
                event.preventDefault()
                onRegisteredTime({nome: nomeTime, cor: corTime})
            })}>
                <h2> Prencha os dados criar novo time </h2>
                <TextField 
                    mandatory 
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    onChanged={valor => setNomeTime(valor)}
                />
                <TextField 
                    mandatory
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    onChanged={valor => setCorTime(valor)}
                />             
                <Button>
                    Criar novo time
                </Button>
            </form>
        </section>
    )
}


export default Forms;