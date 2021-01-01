import React from 'react'
import './Todo.css'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {

    return (
        <div className='todo'>
            <div style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>{todo.text}</div>

            <div className='todo--row'>
                <button className='todo__button' onClick={() => completeTodo(index)}>
                    Complete
                </button>
                <button type="button" className='todo__button' onClick={() => removeTodo(index)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Todo