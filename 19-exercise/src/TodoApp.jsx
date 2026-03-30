import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { initialState, reducer } from "./reducer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import styles from "./todoApp.module.css";
export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <TodoContext.Provider value={{ state, dispatch }}>
        <h2 className={styles.title}>My Todo List</h2>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
};
