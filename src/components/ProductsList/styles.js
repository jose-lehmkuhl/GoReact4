import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListItem = styled.div`
  width: 25%;
  box-sizing: border-box;
  flex: 1;
  height: fit-content;
  padding: 15px;
  text-align: center;
  border-radius: 1px;
  border-color: #aaa;
  border-style: solid;
  margin: 10px;

  a {
    text-decoration: none;
    height: 100%;
    width: 100%;

    &:hover {
      text-decoration: underline;
    }

    img {
      flex: 1;
      width: auto;
      height: 150px;
    }
    div {
      height: 100%;
      justify-content: space-between;
      margin-top: 10px;

      h3 {
        margin: 2px;
        color: #000;
        margin-top: 10px;
      }

      p {
        color: #aaa;
        margin-top: 10px;
      }

      h2 {
        color: #37bea9;
        margin-top: 10px;
      }
    }
  }
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
