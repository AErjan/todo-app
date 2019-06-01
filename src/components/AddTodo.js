import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TodoContext);

  let todoID = 201;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: { id: todoID, title: text, complete: false },
    });
    setText('');
    todoID++;
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo__form">
        <input
          type="text"
          placeholder="Add todo..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="add-todo__input"
        />
        <button className="add-todo__button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
