import React from 'react'
import { useContext } from 'react'
import TodoContext from './TodoContext'
import styles from './todoItems.module.css'
export const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)
  return (
    <div>
        <li className={styles.todoItem} >
          <div className={styles.todo}>
            <input onClick={() => dispatch({type: "toggle", payload: todo.id})} type="checkbox" />
           <span style={{ textDecoration: todo.complete ? "line-Through" : ""}}>{todo.text}</span>
          </div>
           {todo.complete &&  <button onClick={() => dispatch({type : "delete", payload: todo.id})}>remove</button>}
        </li>
    </div>
  )
}
