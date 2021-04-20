import React, { Component } from 'react';
import './TodoForm.scss';

class TodoForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" />
        <label htmlFor="contents">상세내용</label>
        <textarea id="contents" />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default TodoForm;