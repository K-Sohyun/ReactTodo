import React, { useState, useRef } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplate = () => {
    const No = useRef(1);
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const onDel = (id)=>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, check : !todo.check} : todo))
    }

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: No.current++,
                text,
                check: false
            }
        ])
    }

    const onEdit = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
        setEditTodo(null)
    }

    return (
        <div className="container">
            <h1>📌 할 일 목록</h1>
            <TodoInsert onAdd={onAdd} editTodo={editTodo} onEdit={onEdit} />
            <TodoList todos={todos} onToggle={onToggle} onDel={onDel} setEditTodo={setEditTodo} />
        </div>
    )
}

export default TodoTemplate;