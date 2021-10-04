import Logo from '../images/Rick_and_Morty_-_logo_(English).png';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='RickandMorty' />
    </header>
  );
};
export default Header;
