import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from 'components/TodoItem/TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onToggleTodoComplete } = this.props;

    return (
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onToggleTodoComplete={onToggleTodoComplete} />
        })}
      </ul>
    );
  }
}

export default TodoList;