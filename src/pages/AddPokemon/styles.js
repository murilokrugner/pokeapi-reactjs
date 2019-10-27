import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Search = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: center;

  input {
    width: 220px;
    border: 1px solid #e6ecf0;
    height: 35px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    margin-right: 250px;
  }

  button {
    margin: 5px 0 0;
    height: 35px;
    width: 90px;
    background: #CD5C5C;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 13px;
  }
`;

export const Box = styled.div`
  display: flex;
  margin: 25px;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  width: 320px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #DCDCDC;
  position: relative;

  img {
    width: 300px;
  }
`;
