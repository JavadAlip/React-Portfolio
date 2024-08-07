import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/jvD.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      className={`fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-white text-black navbar ${nav ? 'bg-[#000000] transition-bg' : 'transition-bg'
        }`}
    >
      <Link to='home'>
        <img src={logo} alt="" style={{ width: '120px', height: '80px', cursor: 'pointer' }} />
      </Link>
      <div className='md:flex hidden flex-grow justify-end'>
        <ul className='flex space-x-4'>
          <li>
            <Link to="home" smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-black text-md hover:text-gray-400 transition-colors'
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-black text-md hover:text-gray-400 transition-colors'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-black text-md hover:text-gray-400 transition-colors'
            >
              Projects
            </Link>

          </li>
          <li>
            <Link to="contact" smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-black text-md hover:text-gray-400 transition-colors'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} className='md:hidden z-10 bg-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={`${!nav ? 'hidden' : 'absolute top-[80px] left-0 w-full h-screen text-white bg-[#000000] flex flex-col items-center justify-center'
          }`}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
