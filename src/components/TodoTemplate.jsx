import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplate = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos)
    }, [])

    useEffect(() => {
        if (todos.length) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    const onAdd = (text) => {
        const newTodo = {
            id: uuidv4(),
            text,
            check: false
        }
        setTodos([...todos, newTodo])
    }

    const onDel = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos)
        if (!updatedTodos.length) {
            localStorage.removeItem('todos')
        }
    }

    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, check: !todo.check } : todo))
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