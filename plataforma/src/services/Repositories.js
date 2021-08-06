import fireDb from './firebase'


export const addRepository = async repo => {
  let data = {};

  console.log("repoAdd::entry", repo);

  try {
    data = {
      name: repo.name,
      description: repo.description,
      language: repo.lang,
      html_url: repo.url,

    };

    await fireDb.firestore()
    .collection('repositories')
    .add(data);
    alert("adicionado com sucesso")
    document.location.reload();
  } catch (error) {
      console.error(
        "repoAdd:: erro on save",
        data,
        error,
      )
  }

return data;
}


export const updateRepository = async repo => {

  let data = {};

  console.log("repoUp::entry", repo);

  try {
    data = {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.lang,
      html_url: repo.url,

    };



    await fireDb.firestore()
    .collection('repositories')
    .doc(repo.id)
    .set(data);

    console.log("atualizado com sucesso")
    document.location.reload();
    alert("atualizado com sucesso")

  } catch (error) {
    alert("atualizado com erro")
      console.error(
        "repoup:: erro on autualizar",
        data,
        error,
      )
  }

return data;
}

export const deleteRepository = async repo => {
  console.log("deletar :: repo", repo)


  await fireDb.firestore()
    .collection('repositories')
    .doc(repo.id)
    .delete();
    alert("apagado com sucesso")
    document.location.reload();

}
