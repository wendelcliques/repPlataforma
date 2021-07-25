import fireDb from './firebase'

export const addRepository = async repo => {
  let data = {};

  console.log("repoAdd::entry", repo);

  try {
    data = {
      name: repo.name,
      description: repo.description,
      language: repo.language,
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
