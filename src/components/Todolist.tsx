import {Tasks} from './Tasks.tsx';
import {JSX} from 'react';
import {Title} from './Title.tsx';
import {Input} from './Input.tsx';
import {Button} from './Button.tsx';
import {Task} from '../types/Task.ts';

type Props = {
    tasks: Task[]
    removeTask: (taskID: string) => void
}

export const Todolist = ({tasks, removeTask}: Props): JSX.Element => {
    return (
        <div>
            <Title title={'What to learn'}/>
            <Input/>
            <Tasks tasks={tasks} removeTask={removeTask}/>
            <div>
                <Button title={'All'} clickHandler={() => {
                }}/>
                <Button title={'Active'} clickHandler={() => {
                }}/>
                <Button title={'Completed'} clickHandler={() => {
                }}/>
            </div>
        </div>
    );
};