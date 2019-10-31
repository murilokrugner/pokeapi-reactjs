import styled from 'styled-components';

export const Container = styled.div`
  background: #00BFFF;
  padding: 0 30px;
  width: 1500px;
  max-width: 1500px;
`;

export const Content = styled.div`
  height: 50px;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 60px;
      width: 90px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: #667580;
      font-weight: bold;
      margin-left: 30px;
    }
  }

`;
