import '../styles/App.css';
import api from '../services/charactersApi';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';

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
          <form>
            <label className='form__label display-block' htmlFor='name'>
              Filtrar por nombre:
            </label>
            <input
              className='form__input-text'
              type='text'
              name='name'
              id='name'
              value={searchName}
              onChange={handleSearchName}
            />
            <label className='form__label display-block' htmlFor='specie'>
              Especie:
            </label>
            <select
              className='form__input-text'
              name='gender'
              id='gender'
              value={searchSpecie}
              onChange={handleSearchSpecie}
            >
              <option value='all'>Todos</option>
              <option value='Human'>Human</option>
              <option value='Alien'>Alien</option>
            </select>
          </form>
        </section>
        <section>
          <CharactersList data={filteredData} />
        </section>
      </div>
    </div>
  );
}

export default App;
