import React from 'react'
import "./TodoListItem.css"

export default function TodoListItem({todo, onRemovePressed, onCompletePressed}) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
            <button className="remove-button" onClick={()=> onRemovePressed(todo.text)}>Remove</button>
            {(todo.isCompleted) || <button className="completed-button" onClick={()=> onCompletePressed(todo.text)}>Mark As Completed</button>}

            </div>
        </div>
    )
}
