import React, { Component } from 'react';
import './ListPage.scss';
import api from 'api';
import TodoCategory from 'components/TodoList/TodoCategory/TodoCategory';
import TodoListWrapper from 'components/TodoList/TodoListWrapper/TodoListWrapper';
import NotFoundPage from './NotFoundPage';

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
    const { todos, isError, filterOption } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="todo-list-page">
        <h2>
          <span className="emoji">📋</span> 할 일 목록
        </h2>
        <TodoCategory
          filterOption={filterOption}
          onChangeFilterOption={this.onChangeFilterOption}
        />
        <TodoListWrapper todos={todos} onToggleTodoComplete={this.onToggleTodoComplete} />
      </section>
    );
  }
}

export default ListPage;