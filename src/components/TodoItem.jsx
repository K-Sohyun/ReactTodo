import React from "react";
import TodoButton from "./TodoButton";

const TodoItem = ({ todo, onToggle, onDel, setEditTodo }) => {
    const { id, text, check } = todo;

    return (
        <li className={check ? "on" : ""}>
            <div className="left">
                <span className="checkBtn" onClick={() => onToggle(id)}>완료</span>
                <span className="item-text">{text}</span>
            </div>
            <div className="right">
                <TodoButton onClick={() => setEditTodo(todo)} buttonLabel="수정" buttonClass="btn btn--edit" />
                <TodoButton onClick={() => onDel(id)} buttonLabel="삭제" buttonClass="btn btn--delete" />
            </div>
        </li>
    )
}

export default TodoItem;