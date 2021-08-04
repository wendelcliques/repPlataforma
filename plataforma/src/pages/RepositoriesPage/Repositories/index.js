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
      setRepoDelete,

      onDelete,

    }) => {

const repos = repositories
.filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
.map((repository) => (

  <Repository

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
      setRepoDelete={setRepoDelete}

      onDelete={onDelete}
  />



));

// console.log("key", repository.id);

  return  <Container>
    {repos}


  </Container>;


};

 Repositories.defaultProps = {
  currentLanguage: undefined,
  onFilterAddClick: undefined,
  setName: undefined,

      setDescription: undefined,
      setLang: undefined,
      setUrl: undefined,
      setId: undefined,

      setIsEdit: undefined,
      setRepo: undefined,
      setRepoAdd: undefined,
      setRepoDelete: undefined,

      onDelete: undefined,

}

Repositories.propTypes = {



  repositories: PropTypes.arrayOf(
    PropTypes.shape({



      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      html_url: PropTypes.string,
      language: PropTypes.string,
    }).isRequired
    ).isRequired,

    onFilterAddClick: PropTypes.func,
    setName: PropTypes.func,

      setDescription: PropTypes.func,
      setLang: PropTypes.func,
      setUrl: PropTypes.func,
      setId: PropTypes.func,

      setIsEdit: PropTypes.func,
      setRepo: PropTypes.func,
      setRepoAdd: PropTypes.func,
      setRepoDelete: PropTypes.func,

      onDelete: PropTypes.func,

currentLanguage: PropTypes.string,




};









export default Repositories;

