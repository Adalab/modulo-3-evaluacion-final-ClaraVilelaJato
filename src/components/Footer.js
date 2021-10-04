import logo from '../images/ricklogofinal.png';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <img alt='ricklogo' src={logo} className='footer__image'></img>
      <small>Clara Vilela Jato 2021 </small>
    </footer>
  );
};
export default Footer;
