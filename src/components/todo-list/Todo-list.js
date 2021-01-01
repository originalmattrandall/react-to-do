import React from 'react'
import Todo from '../todo'
import AddTodoForm from '../add-todo-form/Add-todo-form'
import './Todo-list.css'

const Todolist = () => {
    const [todoList, setTodos] = React.useState([
        {
            text: "Create todo web application using react and react hooks",
            isComplete: false
        },
        {
            text: "upload project as a public repo on github to share with the world",
            isComplete: false
        },
        {
            text: "Drink coffee. Pat self on back.",
            isComplete: false
        },
        {
            text: "What does this look like with an overly long sentence that doesnt even make any sense or is correct in any way shape or form",
            isComplete: false
        }
    ])

    const addTodo = text => {
        const newTodoList = [...todoList, { text }]
        setTodos(newTodoList)
    }

    const completeTodo = index => {
        const updatedTodoList = [...todoList]
        updatedTodoList[index].isComplete = true
        setTodos(updatedTodoList)
    }

    const removeTodo = index => {
        const newTodoList = [...todoList]
        newTodoList.splice(index, 1)
        setTodos(newTodoList)
    }

    return (
        <div className='list-container'>
            <div className='items-list'>
                <h3> Get This Done! </h3>
                <AddTodoForm addTodo={addTodo} />
                {todoList.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />))}
            </div>
        </div>
    )
}

export default Todolist