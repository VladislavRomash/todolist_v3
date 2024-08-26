import React from 'react';
import style from './Button.module.css'

type ButtonProps = {
    text: string;
}

export const Button = ({text}: ButtonProps) => <span className={style.button}>
    <button>{text}</button>
</span>
