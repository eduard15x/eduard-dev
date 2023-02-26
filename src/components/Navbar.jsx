import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoLight from '../assets/Logo-Light.png';
import { Link } from 'react-scroll';
import navLinks from '../data/navLinks.json';

const Navbar = () => {
    const [ mobileNav, setMobileNav ] = useState(false);

    const handleNav = () => {
        setMobileNav(mobileNav ? false : true);
    };

    return (
        <div className="fixed w-full h-[75px] bg-black flex justify-between items-center px-4 text-[#9c9d9e] z-[9]">
            {/* Logo */}
            <img src={ LogoLight } alt="Logo" className="w-[40px] rounded-[50%] opacity-90 lg:ml-4 z-50" />

            {/* Menu large screens */}
            <ul className='hidden nav-list md:flex'>
                {
                    navLinks.map((item) => (
                        <li className='mx-10 hover:text-white'>
                            <Link to={ item.linkTo } smooth={true} duration={500}>
                                { item.linkName }
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* Hamburger icon */}
            <div className='md:hidden cursor-pointer z-10 hover:text-white' onClick={handleNav}>
                { mobileNav ? <FaTimes /> : <FaBars /> }
            </div>

            {/* Mobile Menu */}
            <ul className={`nav-list-mobile ${mobileNav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-black flex-col 
                            justify-center items-center`}>
                {
                    navLinks.map((item) => (
                        <li className="hover:text-white">
                            <Link to={ item.linkTo } smooth={true} duration={500} onClick={handleNav}>
                                { item.linkName }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Navbar;
