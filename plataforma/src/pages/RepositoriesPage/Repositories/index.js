import React from 'react'
import PropTypes from 'prop-types';

import Repository from './Repository'

import { Container } from './styles'

const Repositories = ({ repositories, currentLanguage, onFilterAddClick, setName }) => {
const repos = repositories
.filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
.map((repository) => (
  <Repository
  key={repository.id}
  repository={repository}

  onFilterAddClick={onFilterAddClick}
  setName={setName}
  />
));

  return <Container>
    {repos}
  </Container>;
};

Repositories.defaultProps = {
  currentLanguage: undefined,
  
}

Repositories.propTypes = {



  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      onFilterAddClick: PropTypes.number,
      setName: PropTypes.func,

      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
    ).isRequired,

currentLanguage: PropTypes.string,




};

export default Repositories;

