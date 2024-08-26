import React from 'react';
import {Task} from '../../types/task';

type TasksProps = {
    tasks: Task[];
}

export const Tasks = ({tasks}: TasksProps) => {
    return (
        <>
            {
                tasks.map(m => {
                    return (
                        <ul>
                            <li key={m.id}>
                                <input type={'checkbox'}
                                       checked={m.isDone}/>
                                <span>{m.title}</span></li>
                        </ul>
                    )
                })}
        </>
    );
}