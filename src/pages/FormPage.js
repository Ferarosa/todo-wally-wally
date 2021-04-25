import React, { Component } from 'react';
import TodoForm from 'components/TodoForm/TodoForm';
import NotFoundPage from './NotFoundPage';
import api from 'api';

class FormPage extends Component {
  state = {
    type: '', // 추가 or 수정 유형 지정
    title: '', // 제목
    contents: '', // 내용
    isError: false, // 할일 작성 페이지 로드시 에러인 경우 Not Found Page 보여주기 위한 플래그
  }

  componentDidMount() {
    const { type, match } = this.props;

    this.setState({
      type,
    });

    if (type === 'edit') {
      const todoId = match.params.id;

      const { data, isError } = api.fetchTodoItem(todoId);

      if (isError) {
        this.setState({
          isError,
        });
        return;
      }

      this.setState({
        title: data.title,
        contents: data.contents,
      });
    }
  }

  onChangeNotMatchTodoId = () => {
    this.setState({
      notMatchTodoId: true,
    });
  }

  onChangeTitle = (title) => {
    this.setState({
      title,
    });
  }

  onChangeContents = (contents) => {
    this.setState({
      contents,
    });
  }

  onSubmitTodo = (e) => {
    e.preventDefault();

    const { title, contents, type } = this.state;
    const { history } = this.props;

    if (type === 'add') {
      const { message, isError } = api.createTodoItem({
        title,
        contents,
      });

      alert(message);

      if (!isError) {
        history.push('/list');
      }
    }
  }

  render() {
    const { type, title, contents, isError } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="todo-form-page">
        <h2>할일 {type === 'add' ? '추가' : '수정'}</h2>
        <TodoForm
          title={title}
          contents={contents}
          onChangeTitle={this.onChangeTitle}
          onChangeContents={this.onChangeContents}
          onSubmitTodo={this.onSubmitTodo}
        />
      </section>
    );
  }
}

export default FormPage;