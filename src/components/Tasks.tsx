import {JSX} from 'react';
import {Task} from '../types/Task.ts';

type Props = {
    tasks: Task[];
}

export const Tasks = ({tasks}: Props): JSX.Element => {

    const task: JSX.Element[] = tasks.map(m => {
        return (
            <li key={m.id}>
                <input type="checkbox" checked={m.isDone}/> <span>{m.title}</span>
            </li>
        )
    })

    return (
        <ul>
            {task}
        </ul>
    );
};