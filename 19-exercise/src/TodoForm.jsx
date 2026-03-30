import React, { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import styles from './todoForm.module.css'
export const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        complete: false,
      };

      dispatch({ type: "add", payload: newTodo });
      setText("");
      console.log(newTodo);
    }
  };

  return (
    <div className={styles.inputTodo} > 
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};