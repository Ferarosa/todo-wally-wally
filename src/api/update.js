import api from 'api';
import storage from 'utils/storage';

const update = {
  updateTodoItem(todoForm) {
    const { id, title, contents } = todoForm;

    if (title.trim() === '') {
      return {
        message: '제목을 입력해주세요.',
        isError: true,
      }
    }

    if (contents.trim() === '') {
      return {
        message: '내용을 입력해주세요.',
        isError: true,
      }
    }

    const todos = api.fetchTodoList().data;

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, title: title, contents: contents, updatedAt: new Date(), } : todo;
    });

    storage.setItem('wally-todos', JSON.stringify(updatedTodos));

    return {
      message: '할일이 수정되었습니다.',
      isError: false,
    }
  },
  toggleTodoItem(id) {
    const todos = api.fetchTodoList().data;

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    });
    
    storage.setItem('wally-todos', JSON.stringify(updatedTodos));
  }
}

export default update;