import React, { Component } from 'react';
import './NotFoundPage.scss';
import NotFoundImage from 'assets/images/404-error.png';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <section className="not-found-page">
        <img src={NotFoundImage} alt="해당 페이지는 없는 페이지입니다." />
        <p>해당 페이지는 없는 페이지 입니다.</p>
        <Link to="/list">
          (할 일 목록 페이지로 이동)
        </Link>
      </section>
    );
  }
}

export default NotFoundPage;