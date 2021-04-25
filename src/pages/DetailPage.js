import React, { Component } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import api from 'api';
import NotFoundPage from './NotFoundPage';
import './DetailPage.scss';
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

  onToggleTodoComplete = (id) => {
    api.toggleTodoItem(id);
    this.fetchTodoItem();
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
        <article className="todo-detail">
          <div className="todo-detail-title">
            <h3>제목</h3>
            <div className="todo-detail-completed-checkbox" onClick={() => this.onToggleTodoComplete(todo.id)}>
              {todo.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              할일 완료 체크
            </div>
            <p className="title">{todo.title}</p>
          </div>
          <div className="todo-detail-contents">
            <h3>내용</h3>
            <p className="contents">{todo.contents}</p>
          </div>
        </article>
        <article className="todo-detail-button">
          <Link className="todo-detail-button-item edit" to={`/edit/${todo.id}`}>수정</Link>
          <button className="todo-detail-button-item delete" type="button" onClick={this.removeTodoItem}>삭제</button>
        </article>
      </section>
    );
  }
}

export default DetailPage;