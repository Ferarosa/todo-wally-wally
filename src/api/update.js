import api from 'api';
import storage from 'utils/storage';

const update = {
  updateTodoItem(todoForm) {
    const { id, title, contents } = todoForm;

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

    console.log(updatedTodos)

    storage.setItem('wally-todos', JSON.stringify(updatedTodos));
  }
}

export default update;