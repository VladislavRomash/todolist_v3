import {Tasks} from './Tasks.tsx';
import {JSX} from 'react';
import {Title} from './Title.tsx';
import {Input} from './Input.tsx';
import {Button} from './Button.tsx';
import {Task} from '../types/Task.ts';

type Props = {
    tasks: Task[]
}

export const Todolist = ({tasks}: Props): JSX.Element => {
    return (
        <div>
            <Title title={'What to learn'}/>
            <Input/>
            <Tasks tasks={tasks}/>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};