import styled from 'styled-components';

export const Container = styled.div`

`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
  width: 1000px;
  height: 2200px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #E8E8E8;
  position: relative;
`;

export const ListIndex = styled.div`
  display: flex;

  ul {
    margin: 20px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      width: 70px;
      height: 62px;
      font-size: 20px;
      margin: 40px;
    }
  }
`;

export const ListName = styled.div`
  display: flex;

  ul {
    margin: 20px;


    li {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      width: 500px;
      height: 62px;
      font-size: 20px;
      margin: 40px;
    }
  }

`;

export const ListImage = styled.div`
  display: flex;

  ul {
    margin: 20px;


    li {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      margin: 40px;
      width: 70px;
      height: 62px;
    }

    img {
      height: 60px;
      width: 60px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;

  button {
    width: 100px;
    height: 100px;
  }
`;
