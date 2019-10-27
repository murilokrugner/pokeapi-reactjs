import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HashLoader from "react-spinners/HashLoader";
import { Container, Loading, Content, Box, ListIndex, ListName, ListImage, Button } from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(['']);
  const [url, setUrl] = useState(['']);
  const [index, setIndex] = useState(['']);
  const [page, setPage] = useState(0);

  async function loadPokemon() {
    setLoading(true);
    const response = await api.get(`pokemon/?offset=${page}&limit=20`);

    const data = response.data.results.map(item => {
      const urls = item.url;
      const pokemonIndex = urls.split('/')[urls.split('/').length - 2];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
      const arr = { idx: imageUrl };
      return arr;
    });

      const pokeIndex = response.data.results.map(item => {
      const urls = item.url;
      const pokemonIndex = urls.split('/')[urls.split('/').length - 2];

      return pokemonIndex;
    });

    setList(response.data.results);
    setUrl(data);
    setIndex(pokeIndex);

    setLoading(false);

  }

  useEffect(() => {
    loadPokemon();
  }, [page]);

  function nextPage() {
    setPage(page + 20)
  }

  function backPage() {
    setPage(page - 20)

    if (page === 0) {
      setPage(0);
    }
  }

  console.log(page);

  return (
    <Container>
      <Header />
        <Content>
      {loading ? (
        <Loading>
          <HashLoader color="#000"/>
        </Loading>
      ): (
          <Box>
            <ListIndex>
              <ul>
            {index.map(i => (
              <li>{i}</li>
            ))}
          </ul>
        </ListIndex>
        <ListName>
          <ul>
            {list.map(i => (
              <li>{i.name}</li>
            ))}
          </ul>
        </ListName>

        <ListImage>
          <ul>
            {url.map(item => (
              <li>
                <img src={item.idx} />
              </li>
            ))}
          </ul>
        </ListImage>
        <Button>
          <button type="button" onClick={nextPage}>Next</button>
          <button type="button" onClick={backPage}>Back</button>
        </Button>
      </Box>
      )}
      </Content>
    </Container>
  );
}

/*
{list.map(item => (
          <li key={item}>
            <strong>{item.name}</strong>
          </li>
        ))}

*/

/*<img src={i} alt="pokemon image" />*/

/*<li>
          <strong>{item.name}</strong>
          <strong>{i}</strong>
        </li>*/

/*{list.map(item => (
          <Pokemons data={item} />
        ))}*/

/*//console.log(pokemonIndex);
    //const obj = {idx: pokemonIndex};
    //
    //const objImage = {image: imageUrl};


    //setIndex(data.obj);
    //setUrl(data.objImage);*/
