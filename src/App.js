import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/homepage/Home'

import './assets/css/Carousal.css';
import './assets/css/image.css';
import './assets/css/footer.css';
import './assets/css/color.css';
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
