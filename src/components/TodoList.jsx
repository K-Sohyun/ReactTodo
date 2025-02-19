import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDel, setEditTodo }) => {
    return (
        <ul className="todo-list">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDel={onDel} setEditTodo={setEditTodo} />)
            }
        </ul>
    )
}

export default TodoList;