import '../styles/App.css';
import api from '../services/charactersApi';
import { useEffect, useState } from 'react';
import CharactersList from './CharactersList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

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
            />
            <label className='form__label display-block' htmlFor='gender'>
              Género:
            </label>
            <select className='form__input-text' name='gender' id='gender'>
              <option value='all'>Todos</option>
              <option value='human'>Human</option>
              <option value='male'>Allien</option>
            </select>
          </form>
        </section>
        <section>
          <CharactersList data={data} />
          <ul className='cards'>
            <li className='card'>
              <a href='#/user/473cad77-5d41-45ac-a925-e0dbe1d3e417'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/men/69.jpg'
                  alt='Foto de Francisco Korth'
                  title='Foto de Francisco Korth'
                />
                <h4 className='card__name'>Nombre personaje</h4>
                <p className='card__specie'>Especie</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/aa0bdb23-2a7b-43d2-bbf4-441db9bd26b4'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/1.jpg'
                  alt='Foto de Gabrielle Patel'
                  title='Foto de Gabrielle Patel'
                />
                <h4 className='card__title'>Gabrielle Patel</h4>
                <p className='card__description'>Shelbourne / Mujer</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/04efcc0e-b38c-44e8-bc1f-5010e1b0671a'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/men/81.jpg'
                  alt='Foto de Alejandro Nieto'
                  title='Foto de Alejandro Nieto'
                />
                <h4 className='card__title'>Alejandro Nieto</h4>
                <p className='card__description'>Valencia / Hombre</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/fe9061ad-9f86-4e30-938d-89e0dc4bffef'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/88.jpg'
                  alt='Foto de Isla Salmela'
                  title='Foto de Isla Salmela'
                />
                <h4 className='card__title'>Isla Salmela</h4>
                <p className='card__description'>Köyliö / Mujer</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/3a980b3e-a617-4d6d-b1bb-6ed155a22a2b'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/64.jpg'
                  alt='Foto de Remedios Gimenez'
                  title='Foto de Remedios Gimenez'
                />
                <h4 className='card__title'>Remedios Gimenez</h4>
                <p className='card__description'>Madrid / Mujer</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/c6be6299-949b-4566-b384-9b55ed5230a8'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/men/16.jpg'
                  alt='Foto de Mario Snyder'
                  title='Foto de Mario Snyder'
                />
                <h4 className='card__title'>Mario Snyder</h4>
                <p className='card__description'>Orange / Hombre</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/3f4fff4e-82a6-48aa-95ac-f781e37c8605'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/22.jpg'
                  alt='Foto de Lara Furset'
                  title='Foto de Lara Furset'
                />
                <h4 className='card__title'>Lara Furset</h4>
                <p className='card__description'>Folkestad / Mujer</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/0c911a30-4ad4-47fa-ba5a-c22b8dea3d51'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/men/95.jpg'
                  alt='Foto de Jordan Morales'
                  title='Foto de Jordan Morales'
                />
                <h4 className='card__title'>Jordan Morales</h4>
                <p className='card__description'>Ely / Hombre</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/094704e5-9270-4b0d-8fc7-0f59fa4cb83d'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/15.jpg'
                  alt='Foto de Brooke Wang'
                  title='Foto de Brooke Wang'
                />
                <h4 className='card__title'>Brooke Wang</h4>
                <p className='card__description'>Invercargill / Mujer</p>
              </a>
            </li>
            <li className='card'>
              <a href='#/user/b2733767-33d1-4e36-9f13-63341f572595'>
                <img
                  className='card__img'
                  src='https://randomuser.me/api/portraits/women/56.jpg'
                  alt='Foto de Latife Eronat'
                  title='Foto de Latife Eronat'
                />
                <h4 className='card__title'>Latife Eronat</h4>
                <p className='card__description'>Muğla / Mujer</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
