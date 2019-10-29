import styled from 'styled-components';

export const Container = styled.div`
  background: #00BFFF;
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

    ul {
      display: flex;
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667580;
      font-weight: bold;
      margin-left: 30px;
    }
  }

`;
