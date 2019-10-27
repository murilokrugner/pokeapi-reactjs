import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Pokemons from './pages/Pokemons';
import MyPokemons from './pages/MyPokemons';
import AddPokemon from './pages/AddPokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/pokemons" component={Pokemons}/>
        <Route path="/mypokemons" component={MyPokemons} />
        <Route path="/addpokemon" component={AddPokemon} />
      </Switch>
    </BrowserRouter>
  )
}
