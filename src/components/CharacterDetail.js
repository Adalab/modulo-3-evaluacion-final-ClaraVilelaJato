import { Link } from 'react-router-dom';
import dead from '../images/ataud (1).png';
import alive from '../images/heartbeat (1).png';
import unknown from '../images/clue (1).png';
import alien from '../images/alien.png';
import human from '../images/planet-earth.png';
import background from '../images/rickmorty.jpeg';
import '../styles/components/characterdetail.scss';

const CharacterDetail = (props) => {
  const getStatus = () => {
    if (props.character.status === 'Dead') {
      return dead;
    } else if (props.character.status === 'Alive') {
      return alive;
    } else {
      return unknown;
    }
  };

  const getSpecie = () => {
    if (props.character.specie === 'Alien') {
      return alien;
    } else if (props.character.specie === 'Human') {
      return human;
    } else {
      return unknown;
    }
  };

  if (props.character === undefined) {
    return (
      <div className='wrong'>
        <p>Este personaje no existe! Vete a ver la serie!</p>
        <img src={background} alt='Rick y morty te miran mal' />
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='carddetail'>
          <img
            className='carddetail__img'
            src={props.character.photo}
            alt={props.character.name}
          />
          <ul className='carddetail__list'>
            <li className='name'>Name: {props.character.name}</li>
            <li className='status'>
              Status: {props.character.status}
              <img
                className='status__icon'
                src={getStatus()}
                alt={props.character.status}
                title={props.character.status}
              />
            </li>
            <li className='specie'>
              Especie: {props.character.specie}
              <img
                className='specie__icon'
                src={getSpecie()}
                alt={props.character.specie}
                title={props.character.specie}
              />
            </li>
            <li className='origin'>Origen: {props.character.planet}</li>
            <li>Episodios: {props.character.episodes}</li>
          </ul>
          <div className='back'>
            <Link to='/'>
              <button className='back__button' text='Back'>
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default CharacterDetail;
