import api from 'api';
import storage from 'utils/storage';

const recentlySortFunction = (a, b) => b.id - a.id;

const create = {
  createTodoItem(todoForm) {
    const { title, contents } = todoForm;

    if (title.trim() === '') {
      return {
        message: '제목을 입력해주세요.',
        isError: true,
      }
    }

    if (title.trim().length > 50) {
      return {
        message: '제목은 최대 50자까지 작성할 수 있습니다.',
        isError: true,
      }
    }

    if (contents.trim() === '') {
      return {
        message: '내용을 입력해주세요.',
        isError: true,
      }
    }

    if (contents.trim().length > 1000) {
      return {
        message: '내용은 최대 1000자까지 작성할 수 있습니다.',
        isError: true,
      }
    }

    const todos = api.fetchTodoList().data.sort(recentlySortFunction);
    const todoId = todos.length === 0 ? 1 : todos[0].id + 1;

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