import React, { Component } from 'react';
import './TodoForm.scss';
import number from 'utils/number';

const setAlertClassName = (fn) => {
  return fn ? 'alert' : '';
}
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
          <label htmlFor="title">
            제목
            <br />
            <small className={setAlertClassName(title.length > 50)}>
              ({number.commaize(title.length)}/50)
            </small>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="제목을 입력해주세요(최대 50자)"
            ref={this.titleInput}
            value={title}
            onChange={onChangeInput}
          />
        </article>
        <article className="todo=form-contents">
          <label htmlFor="contents">
            상세 내용
            <br />
            <small className={setAlertClassName(contents.length > 1000)}>
              ({number.commaize(contents.length)}/1,000)
            </small>
          </label>
          <textarea
            id="contents"
            name="contents"
            placeholder="내용을 작성해주세요(최대 1,000자)"
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