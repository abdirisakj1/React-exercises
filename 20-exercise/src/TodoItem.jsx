import React from "react";
import { useContext } from "react";
import TodoContext from "./TodoContext";
export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
  <>
  <li className="flex justify-between items-center my-5 bg-gray-100 p-4 rounded-lg">
    <div className="flex items-center gap-2">
      <input
        className="h-4 w-4"
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
        type="checkbox"
      />
      <span
        className="text-gray-500"
        style={{ textDecoration: todo.complete ? "line-through" : "" }}
      >
        {todo.text}
      </span>
    </div>

    {todo.complete && (
      <button
        className="text-red-600 text-lg font-medium cursor-pointer"
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      >
        remove
      </button>
    )}
  </li>
</>
  );
};
