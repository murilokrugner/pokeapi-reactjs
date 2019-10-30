import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Search = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: center;
  align-items: center;

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
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin-top: 50px;
  position: relative;
  width: 600px;
  height: 600px;
`;

export const BoxImage = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 20px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;

  ul {
    width: 350px;

    li{
      margin-bottom: 20px;

    }
  }

`;

export const BoxAbilities = styled.div``;
