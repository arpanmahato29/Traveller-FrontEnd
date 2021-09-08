import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/homepage/Home'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
