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

    const todos = JSON.parse(storage.getItem('wally-todos'));
    const todoId = !todos || todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

    todos.push({
      id: todoId,
      title,
      contents,
      isCompleted: false,
    });

    storage.setItem('wally-todos', JSON.stringify(todos));

    return {
      message: '할일이 추가되었습니다.',
      isError: false,
    }
  }
}

export default create;