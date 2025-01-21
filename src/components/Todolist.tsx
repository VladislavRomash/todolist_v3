import {Tasks} from './Tasks.tsx';
import {JSX, useState} from 'react';
import {Title} from './Title.tsx';
import {Input} from './Input.tsx';
import {Button} from './Button.tsx';
import {Task} from '../types/Task.ts';
import {Filter} from '../types/Filter.ts';

type Props = {
    tasks: Task[]
    removeTask: (taskID: string) => void
    createTask: (title: string) => void
}

export const Todolist = ({tasks, removeTask, createTask}: Props): JSX.Element => {

    const [filter, setFilter] = useState<Filter>('all')

    const getFilterValue = (filterValue: Filter) => {
        setFilter(filterValue)
    }
    const filteringTasks = () => {
        switch (filter) {
            case 'active':
                return tasks.filter(f => !f.isDone)
            case 'completed':
                return tasks.filter(f => f.isDone)
            default:
                return tasks
        }
    }
    const filteredTasks = filteringTasks()
    const inputHandler = (title: string) => {
        createTask(title)
    }

    return (
        <div>
            <Title title={'What to learn'}/>
            <Input inputHandler={inputHandler}/>
            <Tasks tasks={filteredTasks}
                   removeTask={removeTask}/>
            <div>
                <Button title={'All'} clickHandler={() => getFilterValue('all')}/>
                <Button title={'Active'} clickHandler={() => getFilterValue('active')}/>
                <Button title={'Completed'} clickHandler={() => getFilterValue('completed')}/>
            </div>
        </div>
    );
};