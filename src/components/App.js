import '../styles/App.scss';
import '../styles/components/main.scss';
import api from '../services/charactersApi';
import ls from '../services/ls';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';
import Filters from './Filters';
import { Route, Switch, useRouteMatch } from 'react-router';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('all');

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
      ls.set('character', initialData);
    });
  }, []);

  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };

  const handleSearchSpecie = (ev) => {
    setSearchSpecie(ev.currentTarget.value);
  };

  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log(selectedCharacter);

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
    <div className='main'>
      <Header></Header>
      <h1 className='title--big'>Rick and Morty</h1>
      <div>
        <Switch>
          <Route path='/character/:id'>
            <section>
              <CharacterDetail character={selectedCharacter} />
            </section>
          </Route>
          <Route exact path='/'>
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
          </Route>
          <Route>
            <section>¡El personaje que buscas no existe!</section>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
