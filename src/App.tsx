import React from 'react';
import './App.css';
import {Todolist} from './components/todolist/Todolist';
import {Task} from './types/task';

function App() {

    const task_1: Task[] = [
        {id: 1, isDone: true, title: 'React'},
        {id: 2, isDone: false, title: 'HTML'},
        {id: 3, isDone: true, title: 'CSS'},
    ]
    const task_2: Task[] = [
        {id: 4, isDone: false, title: 'Swim'},
        {id: 5, isDone: true, title: 'Run'},
        {id: 6, isDone: false, title: 'Ski'},
    ]

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      task={task_1}/>
            <Todolist title={'What to do'}
                      task={task_2}/>
        </div>
    );
}

export default App;
