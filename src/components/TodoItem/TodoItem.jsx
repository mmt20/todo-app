import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className={styles.checkBox}
      />
      <p> {todo.task}</p>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;