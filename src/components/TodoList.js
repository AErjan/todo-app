import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="todo-list">
    {todos.map(
      todo =>
        todo.id > 190 && (
          <li className="todo-list__item" key={todo.id}>
            <TodoListItem {...todo} deleteTodo={deleteTodo} />
          </li>
        ),
    )}
  </ul>
);

export default TodoList;
