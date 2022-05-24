import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from './Interfaces'

const App: FC = () => {
    const [task, setTask] = useState<string>(' ');
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value)
        } else {
            setDeadline(Number(e.target.value))
        }
    }
    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setTodoList([...todoList, newTask]);
        console.log(todoList)
    }
    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <input type="text" value={task} placeholder="Task..." name="task" onChange={handleChange}/>
                    <input type="number" value={deadline} placeholder="Deadline(in Days)..." name="deadline"/>
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList"></div>
        </div>
    );
}

export default App;
