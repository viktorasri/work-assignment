import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';
import Servers from './pages/Servers';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' exact component={Servers} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
