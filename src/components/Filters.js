const Filters = (props) => {
  return (
    <form>
      <label className='form__label display-block' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
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
    </form>
  );
};

export default Filters;
