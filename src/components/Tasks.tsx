import {ChangeEvent, JSX} from 'react';
import {Task} from '../types/Task.ts';
import {Button} from './Button.tsx';

type Props = {
    tasks: Task[]
    removeTask: (taskID: string) => void;
    changeStatus: (taskID: string, status: boolean) => void
}

export const Tasks = ({tasks, removeTask, changeStatus}: Props): JSX.Element => {

    const task: JSX.Element[] = tasks.map(m => {

        const delTask = () => removeTask(m.id)

        const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) =>
            changeStatus(m.id, e.currentTarget.checked)


        return (
            <li key={m.id}>
                <input type="checkbox"
                       checked={m.isDone}
                       onChange={changeCheckboxHandler}/>
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