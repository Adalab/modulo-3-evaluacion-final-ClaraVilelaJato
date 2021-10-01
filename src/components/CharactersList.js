import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
  const html = props.data.map((characterData, index) => (
    <li className='card' key={characterData.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));

  return <ul className='cards'>{html}</ul>;
};

export default CharactersList;
