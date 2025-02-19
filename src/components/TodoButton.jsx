import React from "react";

const TodoButton = ({ buttonType, buttonClass, buttonLabel, onClick }) => {
    return (
        <button type={buttonType} className={buttonClass} title={buttonLabel} onClick={onClick}></button>
    )
}

export default TodoButton;