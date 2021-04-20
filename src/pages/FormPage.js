import React, { Component } from 'react';
import TodoForm from 'components/TodoForm/TodoForm';

class FormPage extends Component {
  render() {
    return (
      <div>
        <h2>할일 추가</h2>
        <TodoForm />
      </div>
    );
  }
}

export default FormPage;