import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [ mobileNav, setMobileNav ] = useState(false);

    const handleNav = () => {
        setMobileNav(mobileNav ? false : true);
    };

    return (
        <div className="fixed w-full h-[75px] bg-black flex justify-between items-center px-4 text-gray-600 z-[9]">
            {/* Logo */}
            <img src={ Logo } alt="Logo" className="w-[50px]"/>

            {/* Menu */}
            <ul className='hidden nav-list md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to="projects" smooth={true} duration={500}>
                      Projects
                    </Link>
                </li>

                <li>
                    <Link to="skills" smooth={true} duration={500}>
                       Skills
                    </Link>
                </li>

                <li>
                    <Link to="contact"smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>

            </ul>

            {/* Hamburger icon */}
            <div className='md:hidden cursor-pointer z-10' onClick={handleNav}>
                { mobileNav ? <FaTimes /> : <FaBars /> }
            </div>

            {/* Mobile Menu */}
            <ul className={`nav-list-mobile ${mobileNav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-black flex-col 
                            justify-center items-center`}>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>
                    <Link to="skills" smooth={true} duration={500} onClick={handleNav}>
                       Skills
                    </Link>
                </li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
 
export default Navbar;
