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

  setAlertClassName = (fn) => {
    return fn ? 'alert' : '';
  }

  render() {
    const { typeText, title, contents, onChangeInput, onSubmitTodo } = this.props;

    return (
      <form className="todo-form" onSubmit={onSubmitTodo}>
        <article className="todo-form-title">
          <label htmlFor="title">
            제목
            <br />
            <small className={this.setAlertClassName(title.length > 50)}>
              ({title.length}/50)
            </small>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="제목을 입력해주세요(최대 50자)"
            maxlength="50"
            ref={this.titleInput}
            value={title}
            onChange={onChangeInput}
          />
        </article>
        <article className="todo=form-contents">
          <label htmlFor="contents">
            상세 내용
            <br />
            <small className={this.setAlertClassName(contents.length > 1000)}>
              ({contents.length}/1000)
            </small>
          </label>
          <textarea
            id="contents"
            name="contents"
            placeholder="내용을 작성해주세요(최대 1000자)"
            maxlength="1000"
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