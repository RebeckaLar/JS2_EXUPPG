import { Link, NavLink } from 'react-router'
import Dropdown from './Dropdown';
import Logo from '../Placeholders/Logo.svg';
import { IoMdCart } from "react-icons/io";

const Navbar = () => {

  // const { totalQuantity } = 

  return (
    <div className='navbar list-none p-4'>
        <div className='flex container justify-between'>
            <li><Link to="/" className='nav-link'><img src={Logo}></img></Link></li>
            <ul className='flex gap-6 align-center'>
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/productList" className='nav-link'>Products</NavLink></li>
                <li><NavLink to="/contact" className='nav-link'>Contact</NavLink></li>
                <li><NavLink to="/login" className='nav-link'>Login</NavLink></li>
                <li><NavLink to="/checkout" className='nav-link'><IoMdCart /></NavLink></li>
                <li><Dropdown className='relative'><IoMdCart /></Dropdown></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar