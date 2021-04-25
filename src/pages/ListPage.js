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

    if (isError) {
      this.setState({
        isError,
      })
    }
    
    this.setState({
      todos: JSON.parse(data),
    })
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
              {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </ul>)
        }
      </section>
    );
  }
}

export default ListPage;