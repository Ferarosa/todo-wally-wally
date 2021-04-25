import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from 'components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route exact path="/list" component={ListPage} />
        <Route exact path="/form" render={(props) => <FormPage {...props} type="add" />} />
        <Route exact path="/edit/:id" render={(props) => <FormPage {...props} type="edit" />} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;