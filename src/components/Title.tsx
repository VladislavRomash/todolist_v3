import {JSX} from 'react';

type Props = {
    title: string
}

export const Title = ({title}: Props): JSX.Element => <h3>{title}</h3>