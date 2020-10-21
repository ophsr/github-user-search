import React from 'react';
import './style.scss'

type Props = {
    text: string;
    onClick?:()=>void
}

const Button = ({ text, onClick}: Props) => {
    return (
        <button className="primary-button" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;