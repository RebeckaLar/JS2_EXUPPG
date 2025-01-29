import { Link, NavLink } from 'react-router'
import Logo from '../Placeholders/Logo.svg';
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <li><Link to="/" className='nav-link'>
            <img src={Logo}></img>
            </Link></li>
            <ul className='nav-links align-center'>
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/productList" className='nav-link'>Products</NavLink></li>
                <li><NavLink to="/contact" className='nav-link'>Contact</NavLink></li>
                <li><NavLink to="/login" className='nav-link'>Login</NavLink></li>
                <li><NavLink to="/checkout" className='nav-link'><IoMdCart /></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar