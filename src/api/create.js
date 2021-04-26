import api from 'api';
import form from 'utils/form';
import storage from 'utils/storage';

const recentlySortFunction = (a, b) => b.id - a.id;

const create = {
  createTodoItem(todoForm) {
    const { title, contents } = todoForm;

    const { message, isError } = form.prechecker(title, contents);

    if (isError) {
      return {
        message,
        isError,
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
      message: '할 일이 추가되었습니다.',
      isError: false,
    }
  }
}

export default create;