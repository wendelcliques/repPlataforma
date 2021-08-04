import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
 //flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
 //min-height: 100vh;
 padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 2.2.rem;
  color: ${(props) => props.theme.colors.text};
`;


export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 100px;
  height: 44px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;
  padding: 5px 5px;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }

`;
