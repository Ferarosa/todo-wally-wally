import React, { Component } from 'react';
import TodoItem from 'components/TodoItem/TodoItem';
import api from 'api';
import NotFoundPage from './NotFoundPage';

class ListPage extends Component {
  state = {
    todos: [],
    isError: false,
  }

  componentDidMount() {
    this.fetchTodoList();
  }

  fetchTodoList = () => {
    const { data, isError } = api.fetchTodoList();

    this.setState({
      todos: data,
      isError,
    });
  }

  onToggleTodoComplete = (id) => {
    api.toggleTodoItem(id);
    this.fetchTodoList();
  }

  render() {
    const { todos, isError } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="list-page">
        {!todos || todos.length === 0
          ? (<p>할일 목록이 없습니다.</p>)
          : (<ul className="todo-list">
              {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggleTodoComplete={this.onToggleTodoComplete} />)}
            </ul>)
        }
      </section>
    );
  }
}

export default ListPage;