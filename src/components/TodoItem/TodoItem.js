import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-list-item">
      {todo.id}. {todo.title}
    </li>
  );
};

export default TodoItem;