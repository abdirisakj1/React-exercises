import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { initialState, reducer } from "./reducer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col py-10 px-4 justify-center w-1/2 bg-white my-6 rounded-xl">
      <TodoContext.Provider value={{ state, dispatch }}>
        <h2 className="text-4xl my-6 text-center">My Todo List </h2>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
};
