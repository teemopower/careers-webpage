import React from 'react';
import './App.css';

import Jobs from './pages/Jobs';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Jobs} />
      <Route component={Error} />
    </Switch>
    
    </>
  );
}

export default App;