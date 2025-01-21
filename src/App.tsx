import './App.css'
import {Todolist} from './components/Todolist.tsx';
import {JSX} from 'react';

function App(): JSX.Element {
    return (
        <div className="app">
            <Todolist/>
        </div>
    )
}

export default App
