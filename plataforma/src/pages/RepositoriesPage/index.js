import React, {useState, useEffect} from "react"

import Profile from './Profile/index'
import Filter from './Filter'
import Repositories from './Repositories'
import RepositoriesAdd from "./RepositoriesAdd"
import { Container, Sidebar, Main } from './styles'
import { getLangsFrom } from '../../services/api'

import fireDb from '../../services/firebase'


import { addRepository, updateRepository, deleteRepository } from "../../services/Repositories"
import RepositoriesDelete from "./RepositoriesDelete"

const RepositoriesPage = () => {

  const repos = {
    id: null,
    name: null,
    description: null,
    lang: null,
    url: null,
  }

  const [id, setId] = useState(repos.id);

  const [name, setName] = useState(repos.name);
  const [description, setDescription] = useState(repos.description);
  const [lang, setLang] = useState(repos.lang);
  const [url, setUrl] = useState(repos.url);

  const [isEdit, setIsEdit] = useState(false);

const [repositories, setRepositories] = useState([]);

  const [currentLanguage, setCurrentLanguage] = useState();

  const [repo, setRepo] = useState(true);
  const [repoAdd, setRepoAdd] = useState(false);
  const [repoDelete, setRepoDelete] = useState(false);

  const onCancelClick = () => {
   setRepo(true);
   setRepoAdd(false);
   setRepoDelete(false);
  // document.location.reload();
  }

  const onSave = () => {
    const data = {
      id,
       name,
       description,
       lang,
       url,
    };

    console.log("repositories :: onsave", data)



    addRepository(data);


     onCancelClick();

  };


  const onUpdate = () => {
    const data = {
      id,
       name,
       description,
       lang,
       url,
    };

    console.log("repositories :: onupdate", data)


    updateRepository(data)
    // document.location.reload();
    setIsEdit(false);

     onCancelClick();

  };

  const onDelete = () => {
    const data = {
      id,
       name,
       description,
       lang,
       url,
    };
    deleteRepository(data)

    onCancelClick();
  }


  const onFilterAddClick = () => {
    setName('');
    setDescription('');
    setLang('');
    setUrl('');
    setIsEdit(false);
    setRepo(false);
    setRepoAdd(true);

  }








  console.log("repo:: ligar tela", repo);
  console.log("repoadd:: ligar tela", repoAdd)
  console.log("name:: repo page", name)
  console.log("name:: isEdit", isEdit)


useEffect(() => {
  const loadRepositories = async () => {
    const db = fireDb.firestore();
      const data = await db.collection('repositories').get();
      setRepositories(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
  }
  loadRepositories();
}, [repos])

console.log("repositories", repositories)


const user = {
  login: "devsamurai",
  name: "Wendel Sousa",
  avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4" ,
  followers: 0,
  following: 0,
  company: null,
  blog: "https://devsamurai.com.br",
  location: "S??o Paulo - SP",
}



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
      onClick={onFilterClick }

      onFilterAddClick={onFilterAddClick}
      />
    </Sidebar>
    <Main>

    {repoDelete && (

<RepositoriesDelete
onDelete={onDelete}

/>
)}


      {repo && (
      <Repositories
      repositories={repositories}
      currentLanguage={currentLanguage}

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


      onFilterAddClick={onFilterAddClick}
      />
      )}

{repoAdd && (
      <RepositoriesAdd
      onSave={onSave}
      onUpdate={onUpdate}



      name={name}
      description={description}
      lang={lang}
      url={url}
      isEdit={isEdit}

      setName={setName}
      setDescription={setDescription}
      setLang={setLang}
      setUrl={setUrl}



      />
)}



    </Main>
  </Container>
)}

export default RepositoriesPage


// eslint-disable-next-line no-unused-vars

/* const repositories = [
  {
    id: '1',
    name: 'Repo 1',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: 'Ruby',
  },
  {
    id: '2',
    name: 'Repo 2',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
  {
    id: '3',
    name: 'Repo 3',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: 'PHP',
  },
  {
    id: '4',
    name: 'Repo 4',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: null,
  },
  {
    id: '5',
    name: 'Repo 5',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: 'Java',
  },
  {
    id: '6',
    name: 'Repo 6',
    description: 'Descri????o',
    html_url: "https://devsamurai.com.br",
    language: 'TypeScript',
  },
];
*/
