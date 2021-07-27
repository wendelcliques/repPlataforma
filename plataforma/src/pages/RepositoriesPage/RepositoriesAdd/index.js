import React from 'react';

  import PropTypes from 'prop-types';

// import { MdSearch } from 'react-icons/md'

import { Container, Title, Form, Input, Button  } from './styles';



const RepositoriesAdd = ({ onSave, name, description, lang, url, setName, setDescription, setLang, setUrl }) => (








    <Container>

        <Title> Plataforma</Title>
        <Form>
          <Input
          placeholder="Título"
          value={name}
          onChange={ event => setName(event.target.value) } />
          <Input
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value) } />
          <Input
          placeholder="Linguagem"
          value={lang}
          onChange={event => setLang(event.target.value) } />
          <Input
          placeholder="Site"
          value={url}
          onChange={event => setUrl(event.target.value) } />
          <Button
            onClick={
              onSave

            }
          >
            Adicionar
          </Button >
        </Form>
    </Container>
  );


RepositoriesAdd.defaultProps = {
 onSave: null,
 name: null,
 description: null,
 lang: null,
 url: null,

 setName: null,
 setDescription: null,
 setLang: null,
 setUrl: null,

}

RepositoriesAdd.propTypes = {


 onSave: PropTypes.func,
 name: PropTypes.func,
 description: PropTypes.func,
 lang: PropTypes.func,
 url: PropTypes.func,

 setName: PropTypes.func,
 setDescription: PropTypes.func,
 setLang: PropTypes.func,
 setUrl: PropTypes.func,



}

export default RepositoriesAdd;


// eslint-disable-next-line no-unused-vars
