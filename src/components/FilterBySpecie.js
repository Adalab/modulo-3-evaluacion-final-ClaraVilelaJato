const FilterBySpecie = (props) => {
  return (
    <>
      <label className='form__label display-block' htmlFor='specie'>
        Especie:
      </label>
      <select
        className='form__input-text'
        name='gender'
        id='gender'
        value={props.searchSpecie}
        onChange={props.handleSearchSpecie}
      >
        <option value='all'>Todos</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecie;
