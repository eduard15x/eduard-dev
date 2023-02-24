import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [ mobileNav, setMobileNav ] = useState(false);

    const openNav = () => {
        setMobileNav(mobileNav ? false : true);
    };

    return (
        <div className="fixed w-full h-[75px] bg-black flex justify-between items-center px-4 text-gray-600">
            {/* Logo */}
            <img src={ Logo } alt="Logo" className="w-[50px]"/>

            {/* Menu */}
            <ul className='hidden nav-list md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger icon */}
            <div className='md:hidden cursor-pointer z-10' onClick={openNav}>
                { mobileNav ? <FaTimes /> : <FaBars /> }
            </div>

            {/* Mobile Menu */}
            <ul className={`nav-list-mobile ${mobileNav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-black flex-col 
                            justify-center items-center`}>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
 
export default Navbar;
