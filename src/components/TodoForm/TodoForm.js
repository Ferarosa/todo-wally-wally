import React, { Component } from 'react';
import './TodoForm.scss';

class TodoForm extends Component {
  titleInput = React.createRef();

  componentDidMount() {
    this.focusTitleInput();
  }

  focusTitleInput = () => {
    this.titleInput.current.focus();
  }

  onChangeTitle = (e) => {
    this.props.onChangeTitle(e.target.value);
  }

  onChangeContents = (e) => {
    this.props.onChangeContents(e.target.value);
  }

  onSubmitTodo = (e) => {
    this.props.onSubmitTodo(e);
  }

  render() {
    const { title, contents, onSubmitTodo } = this.props;

    return (
      <form className="todo-form" onSubmit={onSubmitTodo}>
        <article className="todo-form-title">
          <label htmlFor="title">제목</label>
          <input type="text" ref={this.titleInput} id="title" value={title} onChange={this.onChangeTitle} />
        </article>
        <article className="todo=form-contents">
          <label htmlFor="contents">상세내용</label>
          <textarea id="contents" value={contents} onChange={this.onChangeContents} />
        </article>
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default TodoForm;