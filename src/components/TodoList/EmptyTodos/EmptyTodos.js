import React from 'react';
import './EmptyTodos.scss';
import EmptyTodosImage from 'assets/images/empty-todos.png';

const EmptyTodos = () => {
  return (
    <>
      <img src={EmptyTodosImage} alt="할 일 목록이 없음" />
      <p className="no-exist-todo-list">할 일 목록이 없습니다.</p>
    </>
  );
};

export default EmptyTodos;