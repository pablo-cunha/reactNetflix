import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
// Components Imports
import Main from './pages/Main';
import Login from './pages/Login';
import Plans from './pages/Plans';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/plans" component={Plans} />
      </Switch>
    </div>
  );
}

export default App;
