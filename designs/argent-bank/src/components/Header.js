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
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Header
