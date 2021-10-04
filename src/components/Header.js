import Logo from '../images/Rick_and_Morty_-_logo_(English).png';
import '../styles/components/header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt='RickandMorty' />
    </header>
  );
};
export default Header;
