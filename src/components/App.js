import '../styles/App.css';
import api from '../services/charactersApi';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';
import Filters from './Filters';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('all');

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleSearchSpecie = (ev) => {
    setSearchSpecie(ev.currentTarget.value);
  };

  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) => searchSpecie === 'all' || searchSpecie === character.specie
    );
  return (
    <div>
      <h1 className='title--big'>Rick and Morty</h1>
      <div className='col2'>
        <section>
          <Filters
            searchName={searchName}
            searchSpecie={searchSpecie}
            handleSearchName={handleSearchName}
            handleSearchSpecie={handleSearchSpecie}
          />
        </section>
        <section>
          <CharactersList data={filteredData} />
        </section>
      </div>
    </div>
  );
}

export default App;
