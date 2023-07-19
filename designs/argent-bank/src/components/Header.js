import "../styles/Header.css"
import logo from '../assets/argentBankLogo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return(
    <nav className="main-nav">
      <NavLink to="/" className='main-nav-logo'>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/signIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
