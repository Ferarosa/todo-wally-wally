import React, { Component } from 'react';
import './TodoListWrapper.scss';
import TodoItem from 'components/TodoList/TodoItem/TodoItem';
import EmptyTodos from '../EmptyTodos/EmptyTodos';

class TodoListWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(this.props.todos) !== JSON.stringify(nextProps.todos);
  }

  render() {
    const { todos, onToggleTodoComplete } = this.props;

    if (!todos.length) {
      return <EmptyTodos />;
    }

    return (
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onToggleTodoComplete={onToggleTodoComplete} />
        })}
      </ul>
    );
  }
}

export default TodoListWrapper;