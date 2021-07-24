import React from 'react'

import Profile from './Profile/index'
import Filter from './Filter'
import Repositories from './Repositories'
import { Container, Sidebar, Main } from './styles'
import { getLangsFrom } from '../../services/api'

const RepositoriesPage = () => {
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

 const repositories = [
  {
    id: 1,
    name: 'Repo 1',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'Ruby',
  },
  {
    id: 2,
    name: 'Repo 2',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
  {
    id: 3,
    name: 'Repo 3',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'PHP',
  },
  {
    id: 4,
    name: 'Repo 4',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'Ruby',
  },
  {
    id: 5,
    name: 'Repo 5',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'Java',
  },
  {
    id: 6,
    name: 'Repo 6',
    description: 'Descrição',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
];


const languages = getLangsFrom(repositories);



return (
  <Container>
    <Sidebar>
      <Profile user={user} />
      <Filter languages={languages} />
    </Sidebar>
    <Main>
      <Repositories repositories={repositories} />
    </Main>
  </Container>
)}

export default RepositoriesPage


