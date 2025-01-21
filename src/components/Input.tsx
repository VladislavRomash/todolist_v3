import {JSX} from 'react';
import {Button} from './Button.tsx';

export const Input = (): JSX.Element => {
    return (
        <div>
            <input/>
            <Button title={'+'}/>
        </div>
    );
};