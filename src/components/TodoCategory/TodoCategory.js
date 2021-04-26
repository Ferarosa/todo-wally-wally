import React, { Component } from 'react';
import './TodoCategory.scss';

const setSelectedFilterOptionClassName = (selectedFilterOption, criteria) => {
  return selectedFilterOption === criteria ? 'selected' : '';
}

class TodoFilter extends Component {
  render() {
    const { filterOption, onChangeFilterOption } = this.props;

    return (
      <div className="todo-category">
        <h4>
          <span className="emoji">🔍</span> 필터 옵션
        </h4>
        <button
          className={`todo-category-item ${setSelectedFilterOptionClassName(filterOption, 'completed')}`}
          onClick={() => onChangeFilterOption('completed')}
        >
          완료된 항목
        </button>
        <button
          className={`todo-category-item ${setSelectedFilterOptionClassName(filterOption, 'inCompleted')}`}
          onClick={() => onChangeFilterOption('inCompleted')}
        >
          완료되지 않은 항목
        </button>
        <button
          className={`todo-category-item ${setSelectedFilterOptionClassName(filterOption, 'all')}`}
          onClick={() => onChangeFilterOption('all')}
        >
          전체 항목
        </button>
      </div>
    );
  }
}

export default TodoFilter;