import React, { Component } from 'react';
import TodoForm from 'components/TodoForm/TodoForm';
import NotFoundPage from './NotFoundPage';
import './FormPage.scss';
import api from 'api';

class FormPage extends Component {
  state = {
    type: '', // 추가 or 수정 유형 지정
    title: '', // 제목
    contents: '', // 내용
    isCompleted: false, // 완료 여부
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
        isCompleted: data.isCompleted,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const presentType = this.props.type;
    const prevType = prevProps.type;

    if (presentType !== prevType && presentType === 'add') {
      this.setState({
        type: presentType,
        title: '',
        contents: '',
        isError: false,
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

    const { type, title, contents, isCompleted } = this.state;
    const { history, match } = this.props;

    const requestSubmitTodo = (fn, todoForm, next) => {
      const { message, isError } = fn(todoForm);
      
      alert(message);

      if (!isError) {
        history.push(next);
      }
    };

    if (type === 'add') {
      requestSubmitTodo(api.createTodoItem, {
        title,
        contents,
      }, '/list');
    } else {
      requestSubmitTodo(api.updateTodoItem, {
        id: +match.params.id,
        title,
        contents,
        isCompleted,
      }, `/detail/${match.params.id}`);
    }
  }

  typeText = (type) => {
    return type === 'add' ? '추가' : '수정';
  }

  render() {
    const { type, title, contents, isError } = this.state;

    if (isError) {
      return <NotFoundPage />;
    }

    return (
      <section className="todo-form-page">
        <h2><span className="emoji">✏️</span> 할일 {this.typeText(type)}</h2>
        <TodoForm
          typeText={this.typeText(type)}
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