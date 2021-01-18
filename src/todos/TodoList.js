import React from 'react'
import {connect} from "react-redux"
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"
import {removeTodo, completeTodo} from "./actions"
import "./TodoList.css"
import {displayAlert} from "./thunks"

function TodoList({todos=[], onRemovePressed, onCompletePressed, onDisplayAlertClicked}) {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo=><TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onDisplayAlertClicked}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed:text=> dispatch(removeTodo(text)),
    onCompletePressed:text=> dispatch(completeTodo(text)),
    onDisplayAlertClicked:text =>dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)