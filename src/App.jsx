import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </div>
  );
};

export default App;
