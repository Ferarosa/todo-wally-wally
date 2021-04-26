import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailPage.scss';
import api from 'api';
import NotFoundPage from './NotFoundPage';
import date from 'utils/date';
import text from 'utils/text';

class DetailPage extends Component {
  state = {
    todo: {
      id: 0,
      title: '',
      contents: '',
      isCompleted: false,
      createdAt: '',
      updatedAt: '',
    },
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

  onToggleTodoComplete = (id) => {
    api.toggleTodoItem(id, 'all');
    this.fetchTodoItem();
  }

  removeTodoItem = () => {
    const { todo } = this.state;
    const { history } = this.props;

    if (confirm('할 일을 정말로 삭제하시겠습니까?')) { //eslint-disable-line
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
        <article className="todo-detail">
          <div className="todo-detail-title">
            <h3>
              <span className="emoji">🌟</span> 제목
            </h3>
            <div className="todo-detail-completed-checkbox">
              <input id="todo-completed" type="checkbox" checked={todo.isCompleted} onChange={() => this.onToggleTodoComplete(todo.id)} />
              <label htmlFor="todo-completed" onChange={() => this.onToggleTodoComplete(todo.id)} />
            </div>
            <p className="title">{text.emptyAltText(todo.title, 'title')}</p>
          </div>
          <div className="todo-detail-contents">
            <h3>
              <span className="emoji">🌟</span> 내용
            </h3>
            <p className="contents">{text.emptyAltText(todo.contents, 'contents')}</p>
          </div>
        </article>
        <article className="todo-detail-footer">
          <article className="todo-detail-footer-date">
            <p className="date">작성 일자: {date.formatedDate(todo.createdAt, true)}</p>
            <p className="date">수정 일자: {date.formatedDate(todo.updatedAt, true)}</p>
          </article>
          <article className="todo-detail-footer-button">
            <Link className="todo-detail-footer-button-item edit" to={`/edit/${todo.id}`}>수정</Link>
            <button className="todo-detail-footer-button-item delete" type="button" onClick={this.removeTodoItem}>삭제</button>
          </article>
        </article>
      </section>
    );
  }
}

export default DetailPage;