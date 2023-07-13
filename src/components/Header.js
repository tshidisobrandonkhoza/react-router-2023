//import packages
import { NavLink, Link } from 'react-router-dom';
//import assests
import '../assets/css/Header.css';

export default function Header() {
    return (
        <div>
            <header className="enHeader">
                <nav>
                     <h1><Link to='/'>Dark Horse Events</Link></h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='events'>Events</NavLink>
                </nav>
            </header>
        </div>
    )
}