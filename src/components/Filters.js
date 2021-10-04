import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
  return (
    <form className='form'>
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <FilterBySpecie
        searchSpecie={props.searchSpecie}
        handleSearchSpecie={props.handleSearchSpecie}
      />
    </form>
  );
};

export default Filters;
