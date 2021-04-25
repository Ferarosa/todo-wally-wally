import storage from 'utils/storage';

const fetch = {
  fetchTodoList() {
    let todos = storage.getItem('wally-todos');
    if (!todos) {
      // 이 페이지를 최초로 여는 경우 빈 배열로 세팅
      storage.setItem('wally-todos', JSON.stringify([]));
      todos = [];
    }
    
    return {
      data: todos,
      isError: false,
    }
  },
  
  fetchTodoItem(id) {
    const todos = JSON.parse(storage.getItem('wally-todos'));
    if (!todos) {
      return {
        data: {},
        isError: true,
      }
    }

    const matcedTodoItem = todos.find((todo) => todo.id === +id);
    if (!matcedTodoItem) {
      return {
        data: {},
        isError: true,
      }
    }
    
    return {
      data: matcedTodoItem,
      isError: false,
    }
  }
}

export default fetch;