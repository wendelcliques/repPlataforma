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
  alert(" atualização p1")
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

    alert(" atualização p2", repo)

    await fireDb.firestore()
    .collection('repositories')
    .doc(repo.id)
    .set(data);

    console.log("atualizado com sucesso")
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
  await fireDb.firestore()
    .collection('repositories')
    .doc(repo.id)
    .delete();


}
