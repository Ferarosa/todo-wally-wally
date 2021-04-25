import storage from 'utils/storage';

const remove = {
  removeTodoItem(id) {
    if (!id) {
      return {
        message: 'id 값을 함께 요청해주세요.',
        isError: true,
      }
    }

    const todos = JSON.parse(storage.getItem('wally-todos'));

    const todoIndex = todos.findIndex((todo) => todo.id === +id);

    if (!todoIndex) {
      return {
        message: 'id 값과 일치하는 할일 항목이 존재하지 않습니다.',
        isError: true,
      }
    }

    todos.splice(todoIndex, 1);

    storage.setItem('wally-todos', JSON.stringify(todos));

    return {
      message: '할일이 삭제되었습니다.',
      isError: false,
    }
  },
}

export default remove;