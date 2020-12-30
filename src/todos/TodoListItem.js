import React from 'react'
import "./TodoListItem.css"

export default function TodoListItem({todo}) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
            <button className="remove-button">Remove</button>
            <button className="completed-button">Mark As Completed</button>

            </div>
        </div>
    )
}