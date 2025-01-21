import './App.css'
import {Todolist} from './components/Todolist.tsx';
import {JSX, useState} from 'react';
import {Task} from './types/Task.ts';

function App(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([
        {id: crypto.randomUUID(), title: 'HTML', isDone: true},
        {id: crypto.randomUUID(), title: 'JS', isDone: true},
        {id: crypto.randomUUID(), title: 'React', isDone: true},
    ]);

    return (
        <div className="app">
            <Todolist tasks={tasks}/>
        </div>
    )
}

export default App
