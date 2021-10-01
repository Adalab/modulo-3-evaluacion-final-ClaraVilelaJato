const getCharactersFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((response) =>
      response.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          id: character.id,
        };
      })
    );
};

const objectToExport = {
  getCharactersFromApi: getCharactersFromApi,
};

export default objectToExport;
