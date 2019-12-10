import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <h3>This is the main application</h3>
      <NavBar />
      <Switch>
        <Route exact path="/page1" component={ Page1 } />
        <Route exact path="/page2" component={ Page2 } />
        <Route exact path="/page3" component={ Page3 } />
      </Switch>
    </div>
  );
}

export default App;
