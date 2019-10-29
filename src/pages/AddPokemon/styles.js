import styled from 'styled-components';

export const Container = styled.div`

`;


export const Search = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: center;

  input {
    max-width: 220px;
    border: 1px solid #e6ecf0;
    height: 35px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    margin-right: 100px;
  }

  button {
    margin: 5px 0 0;
    height: 35px;
    width: 90px;
    background: #00BFFF;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 13px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  list-style: none;
`;

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 600px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(10,23,55,0.9);
  position: relative;

`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 200px;
    width: 200px;
  }

`;


export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;

  }

  strong {
    color: #fff;
    margin: 10px;
    font-size: 15px;
  }

  button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 150px;
    height: 44px;
    background: #00BFFF;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px
  }

`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 120px;
    }

  }

`;
