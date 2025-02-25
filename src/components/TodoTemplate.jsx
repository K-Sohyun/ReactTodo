import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplate = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; // JSON.parse(): JSON 문자열을 객체로 변환, OR 연산자 사용: todos 없으면 [] 반환
        setTodos(storedTodos)
    }, [])

    useEffect(() => {
        if (todos.length) {
            localStorage.setItem('todos', JSON.stringify(todos)) // JSON.stringify(): 객체를 JSON 문자열로 변환
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
        const updatedTodos = todos.filter(todo => todo.id !== id); // 배열을 순회하며 삭제한 id와 일치하지 않는 항목만 남김
        setTodos(updatedTodos)
        if (!updatedTodos.length) {
            localStorage.removeItem('todos')
        }
    }

    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, check: !todo.check } : todo)) // todo 객체 복사 후 check 속성 반전해 새로운 배열 반환
    }

    const onEdit = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo)) // 객체의 text 속성을 newText로 변경
        setEditTodo(null) // 편집 상태 초기화
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