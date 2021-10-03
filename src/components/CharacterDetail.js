const CharacterDetail = (props) => {
  return (
    <>
      <img
        className='card__img'
        src={props.character.photo}
        alt={props.character.name}
      />
      <ul className='character_card'>
        <li>Status: {props.character.status}</li>
        <li>Especie: {props.character.specie}</li>
        <li>Origen: {props.character.planet}</li>
        <li>Episodios: {props.character.episodes}</li>
      </ul>
    </>
  );
};

export default CharacterDetail;
