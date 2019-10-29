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
  margin: 10px;
  width: 1000px;
  height: 2100px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(10,23,55,0.9);
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
      width: 70px;
      height: 62px;
      font-size: 20px;
      margin: 40px;
      font-size: 24px;
      color: #fff;
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
      width: 500px;
      height: 62px;
      font-size: 20px;
      margin: 40px;
      font-size: 24px;
      color: #fff;
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
      margin: 40px;
      width: 70px;
      height: 62px;
    }
    img {
      height: 100px;
      width: 400px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  button {
    margin-top: 50px;
    margin-right: 50px;
    width: 100px;
    height: 44px;
    background: #00BFFF;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px
  }
`;
