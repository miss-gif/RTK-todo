import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <h2>TodoItem</h2>
      {props.item}
    </div>
  );
};

export default TodoItem;
