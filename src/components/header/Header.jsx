import './Header.css';
import logo from '../../assets/Instadog.png'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Instadog Logo" className="logo" />
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        
      </nav>
    </header>
  );
};

export default Header;
