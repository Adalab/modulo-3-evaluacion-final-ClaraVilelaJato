import { Link } from 'react-router-dom';
import '../styles/components/charactercard.scss';
const CharacterCard = (props) => {
  return (
    <>
      <Link to={`./character/${props.characterData.id} `}>
        <img
          className='card__img'
          src={props.characterData.photo}
          alt={`Foto de ${props.characterData.name} `}
          title={`Foto de ${props.characterData.name} `}
        />
        <h4 className='card__name'>{props.characterData.name}</h4>
        <p className='card__specie'>{props.characterData.specie}</p>
      </Link>
    </>
  );
};

export default CharacterCard;
