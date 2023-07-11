
//import packages
import { Outlet } from 'react-router-dom';
//import components
import Header from '../components/Header';
//import assests
import '../assets/css/MainRoot.css';

export default function LayOutRoot() {
    return (
        <>
            <Header />
            <main className='main--root'>
                <Outlet />
            </main>
        </>
    )
}