import React from 'react';
import { Link } from 'react-router-dom';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-list-item">
      <div className="todo-list-item-title">
       {todo.id}. {todo.title}
      </div>
      <Link className="todo-list-item-link" to={`/detail/${todo.id}`}>
        상세보기
      </Link>
    </li>
  );
};

export default TodoItem;