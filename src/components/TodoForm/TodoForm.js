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

  render() {
    const { typeText, title, contents, onChangeInput, onSubmitTodo } = this.props;

    return (
      <form className="todo-form" onSubmit={onSubmitTodo}>
        <article className="todo-form-title">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            name="title"
            type="text"
            ref={this.titleInput}
            value={title}
            onChange={onChangeInput}
          />
        </article>
        <article className="todo=form-contents">
          <label htmlFor="contents">상세 내용</label>
          <textarea
            id="contents"
            name="contents"
            value={contents}
            onChange={onChangeInput}
          />
        </article>
        <button type="submit">{typeText}</button>
      </form>
    );
  }
}

export default TodoForm;