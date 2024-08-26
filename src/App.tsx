import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h3>What is Learn</h3>
            <div>
                <input/>
                <button>add</button>
            </div>
            <ul>
                <li><input type={'checkbox'} checked={true}/> <span>REACT</span></li>
                <li><input type={'checkbox'} checked={false}/> <span>HTML</span></li>
                <li><input type={'checkbox'} checked={true}/> <span>CSS</span></li>

            </ul>
            <div>
                <button>all</button>
                <button>active</button>
                <button>completed</button>
            </div>
        </div>
    );
}

export default App;
