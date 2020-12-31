import React from 'react'
import './Add-todo-form.css'

const AddTodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue("")
    }

    return (
        <div className='todo-form-container'>
            <form className='todo-form-box' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input'
                    placeholder='Add a new task'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button type='submit'>+</button>
            </form>
        </div>
    )
}

export default AddTodoForm