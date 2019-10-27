import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { Container, Content, Box, ListIndex, ListName, ListImage} from './styles';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState(['']);

  useEffect(() => {
    const data = localStorage.getItem('pokemons');

    const convert = JSON.parse(data);

    console.log(convert);
  },[])



  return (
    <Container>
      <Header />
        <Content>
          <Box>
            <ListIndex>
              <ul>
                <li></li>
              </ul>
            </ListIndex>

            <ListName>
              <ul>
                <li></li>
              </ul>
            </ListName>

            <ListImage>
              <ul>
                <li></li>
              </ul>
            </ListImage>

          </Box>
        </Content>
    </Container>
  );
}
