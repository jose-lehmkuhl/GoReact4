import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Spinner = styled.div`
  width: 100%;
  height: 400px;
  flex: 1;
  text-align: center;
  padding-top: 100px;

  svg {
    color: #aaa;
  }
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  div {
    width: 50%;

    &:first-child {
      border-radius: 1px;
      border-color: #aaa;
      border-style: solid;
      display: flex;
    }

    &:last-child {
      margin-left: 20px;
    }

    img {
      height: 300px;
      margin: 30px auto;
    }

    h3 {
      font-size: 30px;
    }

    p {
      color: #aaa;
      font-size: 20px;
      margin-top: 5px;
    }

    h2 {
      color: #37bea9;
      font-size: 35px;

      margin-top: 50px;
    }

    button {
      background: #37bea9;
      color: white;
      width: 100%;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
