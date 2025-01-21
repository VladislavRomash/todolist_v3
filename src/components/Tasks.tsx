import {JSX} from 'react';
import {Task} from '../types/Task.ts';
import {Button} from './Button.tsx';

type Props = {
    tasks: Task[]
    removeTask: (taskID: string) => void;
}

export const Tasks = ({tasks, removeTask}: Props): JSX.Element => {

    const task: JSX.Element[] = tasks.map(m => {

        const delTask = () => removeTask(m.id)

        return (
            <li key={m.id}>
                <input type="checkbox" checked={m.isDone}/>
                <span>{m.title}</span>
                <Button title={'x'} clickHandler={delTask}/>
            </li>
        )
    })

    return (
        <div>
            {tasks.length ? <ul>{task}</ul> : 'Tasks list is empty'}
        </div>
    );
};