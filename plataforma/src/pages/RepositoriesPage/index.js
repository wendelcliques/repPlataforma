import React from 'react'

import Profile from './Profile/index'
import Filter from './Filter'
import Repositories from './Repositories'
import { Container, Sidebar, Main } from './styles'

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
return (
  <Container>
    <Sidebar>
      <Profile user={user} />
      <Filter />
    </Sidebar>
    <Main>
      <Repositories />
    </Main>
  </Container>
)}

export default RepositoriesPage


