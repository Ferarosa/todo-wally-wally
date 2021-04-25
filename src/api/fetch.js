import api from 'api';
import storage from 'utils/storage';

// temp function) id가 클수록 최근에 작성한 할일이기 때문에 최신순으로 정렬하는 임시 함수 구성
const fetch = {
  fetchTodoList(filterOption = 'all') {
    const todos = storage.getItem('wally-todos');
    if (!todos) {
      // 이 페이지를 최초로 여는 경우 빈 배열로 세팅
      storage.setItem('wally-todos', JSON.stringify([]));
    }
    
    const parsedTodos = JSON.parse(todos || '[]');

    if (filterOption === 'all') {
      return {
        data: parsedTodos,
        isError: false,
      }
    }

    if (filterOption === 'completed') {
      const filteredTodos = parsedTodos.filter((todo) => todo.isCompleted);

      return {
        data: filteredTodos,
        isError: false,
      }
    }

    if (filterOption === 'inCompleted') {
      const filteredTodos = parsedTodos.filter((todo) => !todo.isCompleted);

      return {
        data: filteredTodos,
        isError: false,
      }
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

    const todos = api.fetchTodoList().data;
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
  },
}

export default fetch;