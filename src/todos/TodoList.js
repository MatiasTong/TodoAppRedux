import React,{useEffect} from 'react'
import { connect } from "react-redux"
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"
import { removeTodo, completeTodo } from "./actions"
import "./TodoList.css"
import { displayAlert, loadTodos } from "./thunks"

function TodoList({ todos = [], onRemovePressed, onCompletePressed, onDisplayAlertClicked, isLoading, startLoadingTodos }) {
    useEffect(()=>{
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onDisplayAlertClicked} />)}
        </div>
    )
    return (isLoading ? loadingMessage : content);
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)