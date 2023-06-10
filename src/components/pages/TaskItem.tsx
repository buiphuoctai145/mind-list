import React from 'react';
import Task from '../../types/todo'

export const Task = (task:Task) => {
    return (
        <li className='li'>
            <div className='row'>
                <input type="checkbox"></input>
                <p className=''>{task.nameTask}</p>
            </div>
        </li>
    );
};

