import React, {useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { Container, Loading, Content, Box, ListIndex, ListName, ListImage, Button } from './styles';
import Header from './../../components/Header';

import api from '../../services/api';

export default function Pokemons() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(0);

  async function loadPokemon() {
    const response = await api.get(`pokemon/?offset=${page}&limit=20`);

    setName(response.data.results);

    const urls = response.data.results.map(urls => {
    const result = urls.url;
    const pokemonIndex = result.split('/')[result.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    const imageUrlObj = { idx: imageUrl };
    return imageUrl;
    });

    setImage(urls);

  };

  function nextPage() {
    setPage(page + 20)
  }

  function backPage() {
    setPage(page - 20)

    if (page === 0) {
      setPage(0);
    }
  }

  useEffect(() => {
    loadPokemon();
  }, [page]);


  return (
    <Container>
      <Header />
      <Button>
        <button type="button" onClick={backPage}>Voltar Página</button>
        <button type="button" onClick={nextPage}>Avançar Página</button>
      </Button>
        <Content>
      {loading ? (
        <Loading>
          <HashLoader color="#000"/>
        </Loading>
      ): (
          <Box>

            <ListIndex>
              <ul>
            {name.map(name => (
              <li>{name.url.split('/')[name.url.split('/').length - 2]}</li>
            ))}
          </ul>
        </ListIndex>
        <ListName>
          <ul>
            {name.map(i => (
              <li>{i.name.toUpperCase()}</li>
            ))}
          </ul>
        </ListName>

        <ListImage>
          <ul>
            {image.map(image => (
              <li>
                <img src={image} alt="pokemon image" />
              </li>
            ))}
          </ul>
        </ListImage>
      </Box>
      )}
      </Content>
      <Button>
        <button type="button" onClick={backPage}>Voltar Página</button>
        <button type="button" onClick={nextPage}>Avançar Página</button>
      </Button>
    </Container>
  );
}

/*{image.map(image => (
          <Box>
            <img src={image.idx} alt="pokemon image" />
          </Box>
        ))}

        {name.map(name => (
          <Box>
            <strong>{name.name}</strong>
          </Box>
        ))}*/

        /*<div className="index">

          </div>

          <div className="image">
            {image.map(image => (
              <>
                <img src={image} />
                <hr />
              </>
            ))}
          </div>

          <div className="name">

          </div>*/
