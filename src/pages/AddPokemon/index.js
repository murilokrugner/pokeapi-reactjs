import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Form, Input } from '@rocketseat/unform';
import { Container, Search, Box, BoxImage } from './styles';

import api from '../../services/api';
import { stringify } from 'querystring';

export default function AddPokemon() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(['']);
  const [image, setImage] = useState(['']);
  const [typePokemon, setTypePokemon] = useState(['']);
  const [statsPokemonSpeed, setStatsPokemonSpeed] = useState(['']);
  const [statsPokemonSDefense, setStatsPokemonSDefense] = useState(['']);
  const [statsPokemonSAttack, setStatsPokemonSAttack] = useState(['']);
  const [statsPokemonDefense, setStatsPokemonDefense] = useState(['']);
  const [statsPokemonAttack, setStatsPokemonAttack] = useState(['']);
  const [statsPokemonHp, setStatsPokemonHp] = useState(['']);
  const [abilitiesPokemonPrimary, setAbilitiesPokemonPrimary] = useState(['']);
  const [abilitiesPokemonSecond, setAbilitiesPokemonSecond] = useState(['']);
  const [abilitiesPokemonThird, setAbilitiesPokemonThird] = useState(['']);
  const [pokemons, setPokemons] = useState();
  const [storage, setStorage] = useState();

  async function handleSubmit(data) {
    setLoading(true);
    const search = data.name;
    const response = await api.get(`pokemon/${search}/`);
    setLoading(false);
    setResult(response.data);
    setImage(response.data.sprites);
    setTypePokemon(response.data.types[0].type.name);

    setStatsPokemonSpeed(response.data.stats[0].base_stat);
    setStatsPokemonSDefense(response.data.stats[1].base_stat);
    setStatsPokemonSAttack(response.data.stats[2].base_stat);
    setStatsPokemonDefense(response.data.stats[3].base_stat);
    setStatsPokemonAttack(response.data.stats[4].base_stat);
    setStatsPokemonHp(response.data.stats[5].base_stat);
    setAbilitiesPokemonPrimary(response.data.abilities[0].ability.name);
    setAbilitiesPokemonSecond(response.data.abilities[1].ability.name);
    //setAbilitiesPokemonThird(response.data.abilities[2].ability.name);
  }

  function handleStorage() {

    const poke = localStorage.getItem('pokemons');

    const json = JSON.parse(poke);

    setPokemons(json);

    const data =
      {
        imagem: image.front_default,
        name: result.name,
        type: typePokemon,
        speed: statsPokemonSpeed,
        sdefense: statsPokemonSDefense,
        sattack: statsPokemonSAttack,
        defense: statsPokemonDefense,
        attack: statsPokemonAttack,
        hp: statsPokemonHp,
        abilitiesp: abilitiesPokemonPrimary,
        abilitiess: abilitiesPokemonSecond,
      }


      const d = [json, data];

      setStorage(d);

    //localStorage.removeItem('pokemons');

  }

  useEffect(() => {
    localStorage.removeItem('pokemons')
    localStorage.setItem('pokemons', JSON.stringify(storage));
  }, [storage]);

  return (
    <Container>
      <Header />
        <Search>
          <Form onSubmit={handleSubmit}>
              <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nome do Pokemon"
          />
          <button type="submit">Pesquisar</button>
        </Form>
        </Search>

        <Box>
          <BoxImage>
            <img src={image.front_default} alt="pokemon-image" />
          </BoxImage>
        </Box>
    </Container>
  );
}

