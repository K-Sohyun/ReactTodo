import React, { useEffect, useRef, useState } from "react";
import TodoButton from "./TodoButton";

const TodoInsert = ({ onAdd, editTodo, onEdit }) => {
    const textRef = useRef('');
    const [text, setText] = useState('');

    useEffect(() => {
        if(editTodo) {
            setText(editTodo.text)
        }
    }, [editTodo])

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) return
        if(editTodo) {
            onEdit(editTodo.id, text)
        } else {
            onAdd(text)
        }
        setText('')
        textRef.current.focus()
    }

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} ref={textRef} placeholder="React 학습하기" />
            <TodoButton buttonType="submit" buttonLabel={editTodo ? "수정" : "등록"} buttonClass="btn btn--add" />
        </form>
    )
}

export default TodoInsert;