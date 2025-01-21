import {JSX} from 'react';

type Props = {
    title: string
    clickHandler: () => void;
    disableValue?: boolean
}

export const Button = ({title, clickHandler, disableValue}: Props): JSX.Element => <button onClick={clickHandler}
                                                                                           disabled={disableValue}>{title}</button>