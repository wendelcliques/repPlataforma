import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link, Cleaner } from './styles'

import { langColors } from '../../../../services/config';


const Repository = ({
  repository,
  setName,
  setDescription,
  setLang,
  setUrl,

  setRepo,
  setRepoAdd,

}) => {
  const color = langColors[repository.language && repository.language.toLowerCase()];

  const onClick = (valor) => {
    setName(valor.name);
    setDescription(valor.description);
    setLang(valor.language);
    setUrl(valor.html_url);

    setRepo(false);
    setRepoAdd(true);

  }

  return (

    <Container color={color}>
      <Name>{repository.name}</Name>
      <Name>{repository.id}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">Ver</Link>

        <Cleaner


    onClick={


     () => onClick(
       {
       id: repository.id,
      name: repository.name,
      description: repository.description,
      language: repository.language,
      html_url: repository.html_url,
       }

       )}
  >
    Atualizar
  </Cleaner>
      </Footer>

    </Container>
  )};

Repository.propTypes = {

    repository: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,




    }).isRequired,

    setName: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    setLang: PropTypes.func.isRequired,
    setUrl: PropTypes.func.isRequired,

    setRepo: PropTypes.func.isRequired,
    setRepoAdd: PropTypes.func.isRequired,

};

export default Repository


