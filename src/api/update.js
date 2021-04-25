import storage from 'utils/storage';

const update = {
  updateTodoItem(todoForm) {
    const { id, title, contents } = todoForm;

    const todos = JSON.parse(storage.getItem('wally-todos'));

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, title: title, contents: contents } : todo;
    });

    storage.setItem('wally-todos', JSON.stringify(updatedTodos));

    return {
      message: '할일이 수정되었습니다.',
      isError: false,
    }
  }
}

export default update;