import React, { Component } from 'react';
import api from 'api';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router-dom';

class DetailPage extends Component {
  state = {
    todo: {},
    isError: false,
  }

  componentDidMount() {
    this.fetchTodoItem();
  }

  fetchTodoItem = () => {
    const todoId = this.props.match.params.id;
    const { data, isError } = api.fetchTodoItem(todoId);

    this.setState({
      todo: data,
      isError,
    })
  }

  render() {
    const { todo, isError } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="todo-detail-page">
        <article className="todo-detail-wrapper">
          <div className="number">No. {todo.id}</div>
          <div className="title">{todo.title}</div>
          <div className="contents">{todo.contents}</div>
        </article>
        <article className="todo-detail-button-wrapper">
          <Link to={`/edit/${todo.id}`}>수정</Link>
          <button type="button">삭제</button>
        </article>
      </section>
    );
  }
}

export default DetailPage;