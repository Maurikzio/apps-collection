import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import "./todo-styles.css";
import List from './List';

const tasks = [
    {
      id: uuid(),
      task: "Pay the rent",
      completed: false
    },
    {
      id: uuid(),
      task: "Go to the gym",
      completed: false
    },
    {
      id: uuid(),
      task: "Do my homework",
      completed: false
    }
]

const Todo = () => {
    const [ items, setItems ] = useState(tasks);
    const [ task, setTask ] = useState('');

    const handleOnChange = e => {
        const { target: { value } } = e;
        setTask(value)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        if(task.length !== 0){
            setItems(items.concat({id: uuid(), task: task, completed: false}))
            setTask('');
        }
    }

    const handleMarkAsCompleted = id => {
        /* works just for classes
        const taskToChange = items.find(item => item.id === id);
        taskToChange.completed = true;
        setItems(Object.assign(items, taskToChange))*/
        setItems(items.map(item => item.id === id ? {...item, completed: true} : item));
    }

    const handleRemoveTask = id => {
        const filteredTasks = items.filter(task => task.id !== id)
        setItems(filteredTasks);
    }

    return(
        <div className='Todo'>
            <h1>Tasks manager</h1>
            <form autoComplete='off' onSubmit={handleOnSubmit}>
                <input
                    value={task}
                    placeholder='Enter new task'
                    onChange={handleOnChange}
                />
            </form>
            <List items={items} markAsCompleted={handleMarkAsCompleted} removeTask={handleRemoveTask}/>
        </div>
    )

}

export default Todo;
