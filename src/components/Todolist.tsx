import {Tasks} from './Tasks.tsx';
import {JSX} from 'react';
import {Title} from './Title.tsx';
import {Input} from './Input.tsx';
import {Button} from './Button.tsx';

export const Todolist = (): JSX.Element => {
    return (
        <div>
            <Title title={'What to learn'}/>
            <Input/>
            <Tasks/>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};