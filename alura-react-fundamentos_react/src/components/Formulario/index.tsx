import React, { useState } from "react";
import ITarefa from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from "uuid";

export default function Formulario(props: {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}) {
    const [ tarefa, setTarefa ] = useState({
        tarefa: '',
        tempo: '00:00'
    });

    
    function addTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...tarefa,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa({ tarefa: '', tempo: '00:00' })
    }

    return (
        <form className={style.novaTarefa} onSubmit={ addTarefa }>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você deseja estudar" 
                    required
                    value={ tarefa.tarefa }
                    onChange={ event => setTarefa({ ...tarefa, tarefa: event.target.value })}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required
                    value={ tarefa.tempo }
                    onChange={ event => setTarefa({ ...tarefa, tempo: event.target.value }) }
                />
            </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
        </form>
    )
}