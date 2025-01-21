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

    return (
        <div className="app">
            <Todolist tasks={tasks}
                      removeTask={removeTask}
                      createTask={createTask}/>
        </div>
    )
}

export default App
