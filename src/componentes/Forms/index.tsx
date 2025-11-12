import "./Forms.css";
import Field from "../Field";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";
import { IOfficials } from "../Share/interFaces/IOfficials";
import { v4 as uuidv4} from 'uuid'

interface FormsProps {
    onPlayerRegistered:(officilas:IOfficials) => void
    times: string[]
    onRegisteredTime: (time: { nome: string; cor: string }) => void
}


const Forms = ({
    onPlayerRegistered, 
    times, 
    onRegisteredTime
}:FormsProps) => {


    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [data, setData] = useState('')    


    const toSave = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        onPlayerRegistered({
            id: uuidv4(),
            favorito:false,
            nome,
            imagem,
            cargo,
            time,
            data
        })  
        setNome('')
        setImagem('')
        setCargo('')
        setTime('') 
    }


    const toSaveOne = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault()
        onRegisteredTime({
            nome: nomeTime, 
            cor: corTime
        })
        setNomeTime('')
        setCorTime('')
  
    } 

    return (
        <section className="forms">
            <form onSubmit={toSave}>
                <h2> Prencha os dados do player </h2>
                <Field 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    onChanged={valor => setNome(valor)}
                />
                <Field 
                    label="Imagem" 
                    placeholder="Link da imagem aqui"
                    valor={imagem}
                    onChanged={valor => setImagem(valor)}
                />
                <Field 
                    mandatory={true} 
                    label="Data de entrada no time" 
                    placeholder=""
                    valor={data}
                    type="date"
                    onChanged={valor => setData(valor)}
                />
                <Field 
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
            
            <form onSubmit={toSaveOne}>
                <h2> Prencha os dados criar novo time </h2>
                <Field 
                    mandatory 
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    onChanged={valor => setNomeTime(valor)}
                />
                <Field 
                    mandatory
                    type="color"
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