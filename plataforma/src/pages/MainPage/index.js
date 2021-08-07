import React, {useState} from 'react';



import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button  } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  return (


    <Container>
        <Logo src={githubLogo} alt="Plataforma" />
        <Title> Plataforma</Title>
        <Form>
          <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value) } />
          <Input
          placeholder="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value) } />
          <Button
            to="/repositories"
          >
            <MdSearch size={42}  />
          </Button >
        </Form>
    </Container>
  );
};


export default MainPage;
