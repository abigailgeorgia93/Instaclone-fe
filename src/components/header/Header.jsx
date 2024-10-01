import { Link } from "react-router-dom"
import './Header.css';  

const Header = () => {
  return (
    <header className="header">
      <h1>INSTADOG</h1>
      <nav>
        <ul>

          <li><Link to="/">SignUp</Link></li>
          <li><Link to="/images">Images</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header