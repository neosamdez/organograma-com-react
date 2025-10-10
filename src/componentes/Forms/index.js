import "./Forms.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";


const Forms = () => {
    const posits = [
        'Suporte',
        'Adc',
        'Tank',
        'Assassino',
        'Lutador'
    ]



    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [posit, setPosit] = useState('')


    const toSave = (event) => {
        event.preventDefault()
        console.log('form foi submetido => ', nome, imagem, personagem, posit)
    }


    return (
        <section className="forms">
            <form onSubmit={toSave}>
                <h2> Prencha os dados do jogador </h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nickname"
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
                    label="Personagem" 
                    placeholder="Personagem principal"
                    valor={personagem}
                    onChanged={valor => setPersonagem(valor)}
                />
                <Dropdown 
                    mandatory={true} 
                    label="Posição" 
                    itens={posits}
                    valor={posit}
                    onChanged={valor => setPosit(valor)}
                />               
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}


export default Forms;