import React from 'react'
import PropTypes from 'prop-types';

import Repository from './Repository'

import { Container } from './styles'




const Repositories = ({
  repositories,
  currentLanguage,
  onFilterAddClick,
  setName,

      setDescription,
      setLang,
      setUrl,
      setId,

      setIsEdit,
      setRepo,
      setRepoAdd,

    }) => {

const repos = repositories
.filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
.map((repository, indice) => (

  <Repository
  indice={indice}
  repository={repository}

  onFilterAddClick={onFilterAddClick}
  setName={setName}

      setDescription={setDescription}
      setLang={setLang}
      setUrl={setUrl}
      setId={setId}

      setIsEdit={setIsEdit}
      setRepo={setRepo}
      setRepoAdd={setRepoAdd}
  />



));

// console.log("key", repository.id);

  return  <Container>
    {repos}


  </Container>;


};

 Repositories.defaultProps = {
  currentLanguage: undefined,

}

Repositories.propTypes = {



  repositories: PropTypes.arrayOf(
    PropTypes.shape({



      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
    ).isRequired,

    onFilterAddClick: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,

      setDescription: PropTypes.func.isRequired,
      setLang: PropTypes.func.isRequired,
      setUrl: PropTypes.func.isRequired,
      setId: PropTypes.func.isRequired,

      setIsEdit: PropTypes.func.isRequired,
      setRepo: PropTypes.func.isRequired,
      setRepoAdd: PropTypes.func.isRequired,

currentLanguage: PropTypes.string,




};









export default Repositories;

