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
    const { params } = this.props.match;
    const { data, isError } = api.fetchTodoItem(params.id);

    this.setState({
      todo: data,
      isError,
    })
  }

  removeTodoItem = () => {
    const { todo } = this.state;
    const { history } = this.props;

    if (confirm('할일을 정말로 삭제하시겠습니까?')) { //eslint-disable-line
      const { message, isError } = api.removeTodoItem(todo.id);

      alert(message);

      if (!isError) {
        history.push('/list');
      }
    }
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
          <button type="button" onClick={this.removeTodoItem}>삭제</button>
        </article>
      </section>
    );
  }
}

export default DetailPage;