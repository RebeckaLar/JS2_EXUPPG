import { Link, NavLink } from 'react-router'
import Logo from '../Placeholders/Logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <li><Link to="/" className='nav-link'>
            <img src={Logo}></img>
            </Link></li>
            <ul className='nav-links'>
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/Products" className='nav-link'>Products</NavLink></li>
                <li><NavLink to="/Contact" className='nav-link'>Contact</NavLink></li>
                <li><NavLink to="/Login" className='nav-link'>Login</NavLink></li>
                <li><NavLink to="/Checkout" className='nav-link'>C</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar