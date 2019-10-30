import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Form, Input } from '@rocketseat/unform';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button, Search, Status, Box, BoxImage, BoxName, BoxAbilities } from './styles';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function MyPokemons() {
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

    //console.log(response.request.onerror === 'Network Error');

    if(response.data) {
      toast.success('ENCONTRADO');
    }


  }

  useEffect(() => {

  }, []);

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

          {result.name ? (
              <>
              <BoxImage>
                <img src={image.front_default} alt="pokemon-image" />
              </BoxImage>
              <BoxName>
                <h5>Nome: {result.name}</h5>
                <h7>Tipo: {typePokemon}</h7>
              </BoxName>
              <Box>
                <Status>
                  <ul>
                    <li>Speed<ProgressBar now={statsPokemonSpeed} label={`${statsPokemonSpeed}`} animated now={statsPokemonSpeed} /></li>
                    <li>Special Defense<ProgressBar now={statsPokemonSDefense} label={`${statsPokemonSDefense}`} animated now={statsPokemonSDefense} /></li>
                    <li>Special Attack<ProgressBar now={statsPokemonSAttack} label={`${statsPokemonSAttack}`} animated now={statsPokemonSAttack} /></li>
                    <li>Defense<ProgressBar now={statsPokemonDefense} label={`${statsPokemonDefense}`} animated now={statsPokemonDefense} /></li>
                    <li>Attack<ProgressBar now={statsPokemonAttack} label={`${statsPokemonAttack}`} animated now={statsPokemonAttack} /></li>
                    <li>HP<ProgressBar now={statsPokemonHp} label={`${statsPokemonHp}`} animated now={statsPokemonHp} /></li>
                    <li>
                      Habilidades:
                      <strong> {abilitiesPokemonPrimary}, </strong>
                      <strong>{abilitiesPokemonSecond}</strong>
                    </li>
                  </ul>
                </Status>
              </Box>
              <Button>
                <button type="button">Adicionar</button>
                <button type="button" >Excluir</button>
              </Button>

              </>
          ): (
            <span>VOCÊ NÃO TEM NENHUM POKÉMON ADICIONADO :(</span>
          )}


    </Container>
  );
}
