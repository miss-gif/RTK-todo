import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props) => {
  return (
    <div>
      <h1>TodoBoard</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default TodoBoard;
