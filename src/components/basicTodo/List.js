import React from 'react';
import { uuid } from 'uuidv4';
import './todo-styles.css';


const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((item, index) => (
                        <li key={index} className={item.completed ? 'completed' : 'pending'}>
                            {item.task}
                            <div className='actions'>
                                <span className={item.completed ? 'hide' : 'done'} onClick={() => props.markAsCompleted(item.id)}>
                                    <i className='fa fa-check'/>
                                </span>
                                <span className='trash' onClick={() => props.removeTask(item.id)}>
                                    <i className='fa fa-trash'/>
                                </span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;