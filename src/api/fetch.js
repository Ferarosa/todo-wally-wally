import storage from 'utils/storage';

const fetch = {
  fetchTodoList() {
    const todos = storage.getItem('wally-todos');
    if (!todos) {
      // 이 페이지를 최초로 여는 경우 빈 배열로 세팅
      storage.setItem('wally-todos', JSON.stringify([]));
    }
    
    return {
      data: JSON.parse(todos || '[]'),
      isError: false,
    }
  },
  
  fetchTodoItem(id) {
    if (!id) {
      return {
        data: {},
        message: 'id 값을 함께 요청해주세요.',
        isError: true,
      }
    }

    const todos = JSON.parse(storage.getItem('wally-todos'));
    if (!todos) {
      return {
        data: {},
        message: '할일 목록이 존재하지 않습니다.',
        isError: true,
      }
    }

    const matcedTodoItem = todos.find((todo) => todo.id === +id);
    if (!matcedTodoItem) {
      return {
        data: {},
        message: 'id 값과 일치하는 할일 항목이 존재하지 않습니다.',
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