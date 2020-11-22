import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Login from './pages/Login';
import Servers from './pages/Servers';
import NotFound from './pages/NotFound';

axios.defaults.baseURL = 'https://playground.tesonet.lt/v1';

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
