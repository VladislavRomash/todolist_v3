import './App.css'
import {Todolist} from './components/Todolist.tsx';
import {JSX, useState} from 'react';
import {Task} from './types/Task.ts';

function App(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([
        {id: crypto.randomUUID(), title: 'HTML', isDone: true},
        {id: crypto.randomUUID(), title: 'JS', isDone: false},
        {id: crypto.randomUUID(), title: 'React', isDone: true},
    ]);

    const removeTask = (taskID: string) => setTasks(tasks.filter(f => f.id !== taskID));
    const createTask = (title: string) => {
        const newTask: Task = {id: crypto.randomUUID(), title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const changeStatus = (taskID: string, status: boolean) => {
        console.log(taskID, status)
        setTasks(tasks.map(m => m.id === taskID ? {...m, isDone: status} : m));
    }

    return (
        <div className="app">
            <Todolist tasks={tasks}
                      removeTask={removeTask}
                      createTask={createTask}
                      changeStatus={changeStatus}/>
        </div>
    )
}

export default App
