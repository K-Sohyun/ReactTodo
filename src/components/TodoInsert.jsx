import React, { useEffect, useRef, useState } from "react";
import TodoButton from "./TodoButton";

const TodoInsert = ({ onAdd, editTodo, onEdit }) => {
    const textRef = useRef('');
    const [text, setText] = useState('');

    useEffect(() => {
        if(editTodo) {
            setText(editTodo.text) // 기존 할 일 내용 입력창에 설정
            textRef.current.focus() // useRef 사용해 입력창에 focus
        }
    }, [editTodo])

    const changeInput = (e) => {
        const {value} = e.target // input의 value 값 가져옴
        setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault() // 제출 동작 방지

        if(!text) return

        if(editTodo) {
            onEdit(editTodo.id, text) // 수정일 경우 할 일 업데이트
        } else {
            onAdd(text)
        }

        setText('') // 입력창 비우기
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