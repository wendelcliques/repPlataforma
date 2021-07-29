import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link, Cleaner } from './styles'

import { langColors } from '../../../../services/config';


const Repository = ({ repository, setName, indice }) => {
  const color = langColors[repository.language && repository.language.toLowerCase()];

  const onClick = ( ) => {
    setName(indice);
  }

  return (

    <Container color={color}>
      <Name>{repository.name}</Name>
      <Name>{indice}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">Ver</Link>

        <Cleaner
    onClick={


      onClick()}
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
    // onFilterAddClick: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    indice: PropTypes.string.isRequired,
};

export default Repository


