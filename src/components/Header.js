//import packages
import { NavLink } from 'react-router-dom';
//import assests
import '../assets/css/Header.css';

export default function Header() {
    return (
        <header className="enHeader">
            <nav>
                <h1>Dark Horse Events</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
            </nav>
        </header>
    )
}