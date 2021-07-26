import React, {useState} from 'react';

  import PropTypes from 'prop-types';

// import { MdSearch } from 'react-icons/md'

import { Container, Title, Form, Input, Button  } from './styles';

import { addRepository } from '../../../services/Repositories';

const RepositoriesAdd = (
   {onCancelClick}
) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [url, setUrl] = useState('');

let chave = false;
// eslint-disable-next-line no-unused-vars


  const onSave = () => {
    const data = {
      id: null,
       name,
       description,
       language,
       url,
    };

    console.log("repositories add:: onsave", data)

    addRepository(data);



  }

  const onCancel = () => {
    onSave()



  return (


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
          value={language}
          onChange={event => setLanguage(event.target.value) } />
          <Input
          placeholder="Site"
          value={url}
          onChange={event => setUrl(event.target.value) } />
          <Button
            onClick={
              onCancel

            }
          >
            Adicionar
          </Button >
        </Form>
    </Container>
  );
};

RepositoriesAdd.defaultProps = {
onCancelClick: null,

}

RepositoriesAdd.propTypes = {


onCancelClick: PropTypes.func,



}

export default RepositoriesAdd;
