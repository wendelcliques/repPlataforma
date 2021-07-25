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

export const Form = styled.div`
   display: grid;
  //grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  width: 583px;
  max-width: 583px;
  padding: 0 1rem;

`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 1000px ;
  height: 54px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  //margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
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
