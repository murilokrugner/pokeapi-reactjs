import styled from 'styled-components';

export const Container = styled.div`
  background: #CD5C5C;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      width: 90px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    strong {
      font-size: 30px;
      color: #fff;
    }
  }

`;
