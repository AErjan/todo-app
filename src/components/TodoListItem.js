import React, { useState, useContext, useRef } from 'react';
import TodoContext from '../context/TodoContext';

const TodoListItem = ({ id, title, completed }) => {
  const [text, setText] = useState(title);
  const dispatch = useContext(TodoContext);
  const inputEl = useRef(null);

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnChecked = () => {
    dispatch({ type: 'CHANGE_COMPLETED', payload: { id } });
  };

  const handleEdit = async () => {
    if (completed) {
      await handleOnChecked();
      inputEl.current.focus();
    } else {
      inputEl.current.focus();
    }
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'EDIT_TODO', payload: { id, title: text } });
    inputEl.current.blur();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-list__form">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleOnChecked}
          className="todo-list__checkbox"
        />
        <input
          type="text"
          value={text}
          ref={inputEl}
          disabled={completed}
          onChange={handleOnChange}
          className="todo-list__input"
        />
        <button type="button" onClick={handleEdit} className="todo-list__edit">
          Edit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="todo-list__delete"
        >
          Delete
        </button>
      </form>
    </>
  );
};

export default TodoListItem;
