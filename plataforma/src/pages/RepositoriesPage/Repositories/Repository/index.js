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

  setId,

  setIsEdit,
  setRepo,
  setRepoAdd,
  setRepoDelete,



}) => {
  const color = langColors[repository.language && repository.language.toLowerCase()];

  const onClick = (valor) => {



    setName(valor.name);

    setDescription(valor.description);
    setLang(valor.language);
    setUrl(valor.html_url);
    setId(valor.id);



    setIsEdit(true);
    setRepo(false);
    setRepoAdd(true);


  }

  const onDeleteId = (valor) => {
    console.log("delete:: reposotory id", valor.id  )

    setId(valor.id)
    setRepo(false);
    setRepoDelete(true);
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

  <Cleaner


onClick={


 () => onDeleteId(
   {
   id: repository.id,
  name: repository.name,
  description: repository.description,
  language: repository.language,
  html_url: repository.html_url,
   },



   )}
>
Deletar
</Cleaner>
      </Footer>

    </Container>
  )};

  Repository.defaultProps = {


    setName: undefined,

        setDescription: undefined,
        setLang: undefined,
        setUrl: undefined,
        setId: undefined,

        setIsEdit: undefined,
        setRepo: undefined,
        setRepoAdd: undefined,
        setRepoDelete: undefined,



  }

Repository.propTypes = {

    repository: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      html_url: PropTypes.string,
      language: PropTypes.string,




    }).isRequired,

    setName: PropTypes.func,

    setDescription: PropTypes.func,
    setLang: PropTypes.func,
    setUrl: PropTypes.func,
    setId: PropTypes.func,

    setIsEdit: PropTypes.func,
    setRepo: PropTypes.func,
    setRepoAdd: PropTypes.func,
    setRepoDelete: PropTypes.func,



};

export default Repository


