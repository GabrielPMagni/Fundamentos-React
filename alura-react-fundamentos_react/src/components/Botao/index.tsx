import { ReactNode } from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: ReactNode
}

export default function Botao({ type, onClick, children }: Props) {
    return (
        <button type={ type } onClick={ onClick } className={style.botao} >
            { children }
        </button>
    )
}

