import "./Forms.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Forms = () => {
    const posit = [
        'Suporte',
        'Adc',
        'Tank',
        'Assassino',
        'Lutador'
    ]
    return (
        <section className="forms">
            <form>
                <h2> Prencha os dados do jogador </h2>
                <TextField label="Nome" placeholder="Digite seu nickname"/>
                <TextField label="Imagem" placeholder="Link da imagem aqui"/>
                <TextField label="Personagem" placeholder="Personagem principal"/>
                <Dropdown label ="Posição" itens = {posit}/>
                <Button text='Criar card ' />
            </form>
        </section>
    )
}


export default Forms;