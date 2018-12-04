import styled from 'styled-components';

export const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 15px 0px;

  h1 {
    color: #ff9696;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    align-self: center;

    a {
      text-decoration: none;
      color: #ccc;

      span {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
`;

export const Nav = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #ff9696;
  border-radius: 4px;
  min-height: 50px;

  div {
    height: 100%;
    width: 100%;
    flex: 1;

    svg {
      margin-left: 20px;
      margin-top: 8px;
      color: #fff;
    }
  }
`;

export const ProppedButton = styled.button`
  background: #ff9696;
  border: 0;
  font-size: 15px;
  color: ${props => (props.selected ? '#fff' : '#fdfdfd')};

  padding: 15px 10px;
  opacity: ${props => (props.selected ? 1 : 0.7)};

  margin-right: 5px;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }

  cursor: pointer;
`;
