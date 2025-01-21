import {JSX} from 'react';

type Props = {
    title: string
}

export const Button = ({title}: Props): JSX.Element => <button>{title}</button>