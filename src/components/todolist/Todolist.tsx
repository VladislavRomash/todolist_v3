import React from 'react';
import style from './Todolist.module.css'
import {Task} from '../../types/task';
import {Tasks} from '../task/Task';
import {Button} from '../button/Button';

type TodolistProps = {
    title: string
    task: Task[]
}

export const Todolist = ({title, task}: TodolistProps) => {
    return (
        <div className={style.todolist}>
            <h3 className={style.title}>{title}</h3>
            <div>
                <input/>
                <button>add</button>
            </div>
            <Tasks tasks={task}/>
            <div style={{textAlign: 'center'}}>
                <Button text={'All'}/>
                <Button text={'Active'}/>
                <Button text={'Completed'}/>
            </div>
        </div>
    );
};