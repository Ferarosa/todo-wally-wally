import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route exact path="/list" component={ListPage} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/edit/:id" component={FormPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;