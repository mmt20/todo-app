import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTodo({
        id: Date.now(),
        task,
        completed: false,
      });
      setTask('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
        className={styles.todoName}
      />
      <button type="submit" className={styles.createBtn}>Add</button>
    </form>
  );
};

export default TodoForm;