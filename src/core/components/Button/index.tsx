import React from 'react';
import './style.scss'

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <button className="primary-button">
            {text}
        </button>
    )
}

export default Button;