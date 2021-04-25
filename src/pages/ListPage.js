import React, { Component } from 'react';
import TodoCategory from 'components/TodoCategory/TodoCategory';
import TodoItem from 'components/TodoItem/TodoItem';
import NotFoundPage from './NotFoundPage';
import './ListPage.scss';
import api from 'api';

class ListPage extends Component {
  state = {
    todos: [],
    isError: false,
    filterOption: 'all',
  }

  componentDidMount() {
    this.fetchTodoList();
  }

  fetchTodoList = (filterOption) => {
    const { data, isError } = api.fetchTodoList(filterOption);

    this.setState({
      todos: data,
      isError,
    });
  }

  onToggleTodoComplete = (id) => {
    const { filterOption } = this.state;

    api.toggleTodoItem(id);

    this.fetchTodoList(filterOption);
  }

  onChangeFilterOption = (filterOption) => {
    this.setState({
      filterOption,
    });

    this.fetchTodoList(filterOption);
  }

  render() {
    const { todos, isError } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="todo-list-page">
        <h2><span className="emoji">📋</span> 할 일 목록</h2>
        <TodoCategory onChangeFilterOption={this.onChangeFilterOption} />
        {!todos || todos.length === 0
          ? (<p className="no-exist-todo-list">할 일 목록이 없습니다.</p>)
          : (<ul className="todo-list">
              {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggleTodoComplete={this.onToggleTodoComplete} />)}
            </ul>)
        }
      </section>
    );
  }
}

export default ListPage;