import React, { useContext, useState } from "react";
import TodoContext from "./TodoContext";
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
    }
  };

  return (
    <div className="flex gap-2" > 
      <input className="flex-1 border border-gray-400 p-2 text-lg rounded-md"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo..."
      />
      <button className="bg-violet-600 text-white px-4 rounded-lg text-lg cursor-pointer" onClick={handleAdd}>Add</button>
    </div>
  );
};