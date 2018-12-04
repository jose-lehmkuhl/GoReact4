import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #aaa;
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  text-align: center;
  border-bottom-style: solid;
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  margin: 10px;

  &:last-child {
    border-bottom-width: 0px;
  }

  div {
    width: fit-content;
    &:first-child {
      display: flex;
      text-align: left;
      img {
        width: 50px;
        height: 70px;
      }
      div {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 10px;

        h3 {
          margin: 2px;
          color: #000;
          margin-top: 10px;
          font-size: 16px;
        }

        p {
          color: #aaa;
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
  }
`;

export const NoItems = styled.div`
  text-align: center;
  padding: 30px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  vertical-align: middle;
  align-items: center;
  h2 {
    width: 140px;
    height: fit-content;
    margin-right: 5px;
    color: #37bea9;
  }

  input {
    margin-right: 5px;

    height: 30px;
    width: 40px;
  }

  button {
    font-size: 18px;
    color: #999;
    background: #fff;
    border: 0;
    cursor: pointer;

    &:hover {
      color: #555;
    }
  }
`;

export const ItemsHeader = styled.div`
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #aaa;

  div {
    &:first-child {
      padding: 0 52px;
    }

    &:last-child {
      padding: 0 40px;

      display: flex;
      flex-direction: row;
      padding-right: 30px;
    }
  }
`;

export const Total = styled.div`
  justify-content: flex-end;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-right: 30px;

  p {
    color: #aaa;
    font-size: 20px;
    margin-right: 20px;
    align-self: center;
  }

  h2 {
    color: #37bea9;
    font-size: 25px;
  }
`;
