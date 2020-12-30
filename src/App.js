import React from "react";
import hot from "react-hot-loader"
import './App.css';
import TodoList from "./todos/TodoList"

function App() {
    return(
        <div className="App">
            <TodoList />
            <h2>hello</h2>
        </div>

    )
}

export default App;