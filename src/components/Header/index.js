import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <strong>PokeAPI</strong>
          <ul>
            <li>
              <Link to="/pokemons">Todos os Pokemons</Link>
            </li>
            <li>
              <Link to="/mypokemons">Meus Pokemons</Link>
            </li>
            <li>
              <Link to="/addpokemon">Inserir Pokemon</Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
