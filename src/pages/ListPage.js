import React, { Component } from 'react';
import storage from 'utils/storage';
import TodoItem from 'components/TodoItem/TodoItem';

function EmptyTodos() {
  return (
    <p>할일 목록이 없습니다.</p>
  )
}

class ListPage extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => {
    // 이 페이지를 최초로 여는 경우 빈 배열로 세팅
    const fetchedTodos = storage.getItem('wally-todos');
    if (!fetchedTodos) {
      storage.setItem('wally-todos', JSON.stringify([]));
    }

    this.setState({
      todos: JSON.parse(fetchedTodos),
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <section className="list-page">
        {!todos || todos.length === 0
          ? <EmptyTodos />
          : (<ul className="todo-list">
              {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </ul>)
        }
      </section>
    );
  }
}

export default ListPage;