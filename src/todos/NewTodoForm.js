import React, {useState} from 'react'
import "./NewTodoForm.css"

export default function NewTodoForm() {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
            placeholder="type your new todo here"
            type="text" 
            value={inputValue}
            onChange = {e => setInputValue(e.target.value)}/>
            
            <button className="new-todo-button">Create Todo</button> 
            
        </div>
    )
}
