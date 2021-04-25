import React, { Component } from 'react';
import TodoForm from 'components/TodoForm/TodoForm';
import storage from 'utils/storage';
import NotFoundPage from './NotFoundPage';

class FormPage extends Component {
  state = {
    type: '', // 할일 추가 or 수정
    todoId: 0, // 할일 추가 or 수정시 기준으로 삼을 id 값
    title: '', // 제목
    contents: '', // 내용
    notMatchTodoId: false, // 페이지 mount시 매칭되는 id가 없는 경우 404 Not Found Page를 보여주기 위한 변수
  }

  componentDidMount() {
    const type = this.props.type;
    const todos = JSON.parse(storage.getItem('wally-todos'));

    this.setState({
      type,
    })

    if (type === 'add') {
      const todoId = !todos || todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
      
      this.setState({
        todoId,
      })

      return;
    }

    // 수정 모드인 경우 url 경로에서 id 라는 params 값 찾아서 todo 목록에 있는지 확인
    // [prechecker1] 빈 배열인 경우 404 Not Found Page 보여주기
    if (!todos) {
      this.onChangeNotMatchTodoId();
      return;
    }

    const params = this.props.match.params;
    const todoId = params.id;

    // [prechecker2] params에 id가 없거나 id 값이 0 이하인 경우 404 Not Found Page 보여주기
    if (!params.id || +params.id <= 0) {
      this.onChangeNotMatchTodoId();
      return;
    }

    const matchedTodo = todos.find((todo) => todo.id === +todoId);

    // [prechecker3] id 값과 매칭되는 todo 항목이 없는 경우 404 Not Found Page 보여주기
    if (!matchedTodo) {
      this.onChangeNotMatchTodoId();
      return;
    }

    this.setState({
      title: matchedTodo.title,
      contents: matchedTodo.contents,
      todoId,
    });
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
    const { todoId, title, contents, type } = this.state;
    const { history } = this.props;

    e.preventDefault();

    if (title.trim() === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    if (contents.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const todos = JSON.parse(storage.getItem('wally-todos'));

    const todoForm = {
      id: todoId,
      title,
      contents,
      isCompleted: false,
    };
    
    if (type === 'add') {
      todos.push(todoForm);
      storage.setItem('wally-todos', JSON.stringify(todos));

      alert('할일이 추가되었습니다.');
    }
    
    history.push('/list');
  }

  render() {
    const { title, contents, notMatchTodoId, type } = this.state;

    if (notMatchTodoId) {
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