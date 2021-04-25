import api from 'api';
import storage from 'utils/storage';

const create = {
  createTodoItem(todoForm) {
    const { title, contents } = todoForm;

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
    const todoId = !todos || todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

    const nowDate = new Date();

    const newTodos = todos.concat({
      id: todoId,
      title,
      contents,
      isCompleted: false,
      createdAt: nowDate,
      updatedAt: nowDate,
    });

    storage.setItem('wally-todos', JSON.stringify(newTodos));

    return {
      message: '할일이 추가되었습니다.',
      isError: false,
    }
  }
}

export default create;