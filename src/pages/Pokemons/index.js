import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Pokemons() {
  const pokemon = useSelector(state => state.pokemons.results);

  console.log(pokemon);

  return (
    <Container>
      {pokemon}
    </Container>
  );
}
