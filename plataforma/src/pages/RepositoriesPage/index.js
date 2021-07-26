import React, {useState, useEffect} from "react"

import Profile from './Profile/index'
import Filter from './Filter'
import Repositories from './Repositories'
import { Container, Sidebar, Main } from './styles'
import { getLangsFrom } from '../../services/api'

import fireDb from '../../services/firebase'
import RepositoriesAdd from "./RepositoriesAdd"

const RepositoriesPage = () => {

const [repositories, setRepositories] = useState([]);

  const [currentLanguage, setCurrentLanguage] = useState();

  const [repo, setRepo] = useState(true);
  const [repoAdd, setRepoAdd] = useState(false);

  const onRepoAddClick = () => {
    setRepo(false);
    setRepoAdd(true);
  }

  console.log("repo:: ligar tela", repo);
  console.log("repoadd:: ligar tela", repoAdd)


useEffect(() => {
  const loadRepositories = async () => {
    const db = fireDb.firestore();
      const data = await db.collection('repositories').get();
      setRepositories(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
  }
  loadRepositories();
}, [])

console.log("repositories", repositories)


const user = {
  login: "devsamurai",
  name: "Wendel Sousa",
  avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4" ,
  followers: 0,
  following: 0,
  company: null,
  blog: "https://devsamurai.com.br",
  location: "São Paulo - SP",
}


 /* const repositories = [
  {
    id: '1',
    name: 'Repo 1',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'Ruby',
  },
  {
    id: '2',
    name: 'Repo 2',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
  {
    id: '3',
    name: 'Repo 3',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'PHP',
  },
  {
    id: '4',
    name: 'Repo 4',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: null,
  },
  {
    id: '5',
    name: 'Repo 5',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'Java',
  },
  {
    id: '6',
    name: 'Repo 6',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
];
*/

const languages = getLangsFrom(repositories);

const onFilterClick = (language) => {
  setCurrentLanguage(language);
};

return (
  <Container>
    <Sidebar>
      <Profile user={user} />
      <Filter
      languages={languages}
      currentLanguage={currentLanguage}
      onClick={
        onFilterClick
      }

      onRepoAddClick={onRepoAddClick}
      />
    </Sidebar>
    <Main>
      {repo && (
      <Repositories
      repositories={repositories}
      currentLanguage={currentLanguage}
      />
      )}

{repoAdd && (
      <RepositoriesAdd  />
)}

    </Main>
  </Container>
)}

export default RepositoriesPage


// eslint-disable-next-line no-unused-vars
