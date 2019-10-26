import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

//import Images from './components/Images';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/Pokemons" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}
