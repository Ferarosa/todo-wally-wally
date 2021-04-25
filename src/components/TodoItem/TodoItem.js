import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import date from 'utils/date';
import text from 'utils/text';
import './TodoItem.scss';

const setCompletedClassName = (isCompleted) => {
  return isCompleted ? 'todo-completed' : ''
}

class TodoItem extends Component {
  render() {
    const { todo, onToggleTodoComplete } = this.props;

    return (
      <li className="todo-list-item">
        <div className={`todo-list-item-title ${setCompletedClassName(todo.isCompleted)}`} onClick={() => onToggleTodoComplete(todo.id)}>
          {text.ellipsis(todo.title, 20)} <span className="date">({date.formatedDate(todo.createdAt)})</span>
        </div>
        <Link className="todo-list-item-link" to={`/detail/${todo.id}`}>
          상세보기
        </Link>
      </li>
    );
  }
}

export default TodoItem;