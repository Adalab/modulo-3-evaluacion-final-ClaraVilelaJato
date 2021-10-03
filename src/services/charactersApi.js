const getCharactersFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((response) =>
      response.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          planet: character.origin.name,
          episodes: character.episode.length,
          status: character.status,
          id: character.id,
        };
      })
    );
};

const objectToExport = {
  getCharactersFromApi: getCharactersFromApi,
};

export default objectToExport;
