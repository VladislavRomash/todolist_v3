import {JSX} from 'react';

type Props = {
    title: string
    clickHandler: () => void;
}

export const Button = ({title, clickHandler}: Props): JSX.Element => <button onClick={clickHandler}>{title}</button>