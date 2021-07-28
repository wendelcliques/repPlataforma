import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link, Cleaner } from './styles'

import { langColors } from '../../../../services/config';


const Repository = ({ repository, setName }) => {
  const color = langColors[repository.language && repository.language.toLowerCase()];

  return (

    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">Ver</Link>

        <Cleaner
    onClick={


      setName(repository.name)}
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

      onFilterAddClick: PropTypes.node,
      setName: PropTypes.string,

    }).isRequired,
};

export default Repository


