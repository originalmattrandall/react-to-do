import React from 'react'
import Todo from '../todo/Todo'
import AddTodoForm from '../add-todo-form/Add-todo-form'
import './Todo-list.css'

const Todolist = () => {
    const [todoList, setTodos] = React.useState([
        {
            text: "Learn about React",
            isComplete: false
        },
        {
            text: "Meet friend for lunch",
            isComplete: false
        },
        {
            text: "Build really cool todo app",
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