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

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 300px;

  ul {
    display: flex;
    flex-direction: column;

    li{
      margin-bottom: 20px;
    }
  }

`;
