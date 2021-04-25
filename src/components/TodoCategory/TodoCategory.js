import React, { Component } from 'react';
import './TodoCategory.scss';

class TodoFilter extends Component {
  onChangeFilterOption = (filterOption) => {
    this.props.onChangeFilterOption(filterOption);
  }

  render() {
    return (
      <div className="todo-category">
        <h4><span className="emoji">🔍</span> 필터 옵션</h4>
        <button className="todo-category-item" onClick={() => this.onChangeFilterOption('completed')}>완료된 항목</button>
        <button className="todo-category-item" onClick={() => this.onChangeFilterOption('inCompleted')}>완료되지 않은 항목</button>
        <button className="todo-category-item" onClick={() => this.onChangeFilterOption('all')}>전체 항목</button>
      </div>
    );
  }
}

export default TodoFilter;