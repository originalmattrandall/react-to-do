import React from 'react'
import './Todo.css'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {

    return (
        <div className='todo-container'>
            <div style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>{todo.text}</div>

            <div className='todo-crud'>
                <div className='todo-button' onClick={() => completeTodo(index)}>
                    Complete
                </div>
                <div className='todo-button' onClick={() => removeTodo(index)}>
                    Remove
                </div>
            </div>
        </div>
    )
}

export default Todo