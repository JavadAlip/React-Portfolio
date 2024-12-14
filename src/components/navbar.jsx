// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/jvD.png';
// import { Link } from 'react-scroll';
// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);
//   return (
//     <div
//       className={`fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-black text-white navbar ${nav ? 'bg-[#000000] transition-bg' : 'transition-bg'
//         }`}
//     >
//       <Link to='home'>
//         <img src={logo} alt="" style={{ width: '120px', height: '80px', cursor: 'pointer' }} />
//       </Link>
//       <div className='md:flex hidden flex-grow justify-end'>
//         <ul className='flex'>
//           <li>
//             <Link to="home" smooth={true}
//               duration={500}
//               className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-white text-md hover:text-gray-400 transition-colors'
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="skills" smooth={true}
//               duration={500}
//               className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-white text-md hover:text-gray-400 transition-colors'
//             >
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="projects"
//               smooth={true}
//               duration={500}
//               className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-white text-md hover:text-gray-400 transition-colors'
//             >
//               Projects
//             </Link>

//           </li>
//           <li>
//             <Link to="contact" smooth={true}
//               duration={500}
//               className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-white text-md hover:text-gray-400 transition-colors'
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div onClick={handleClick} className='md:hidden z-10 bg-white'>
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>
//       <ul
//         className={`${!nav ? 'hidden' : 'absolute top-[80px] left-0 w-full h-screen text-white bg-[#000000] flex flex-col items-center justify-center'
//           }`}
//       >
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
//             Home
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
//             Skills
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
//             Projects
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Navbar;




import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/jvdd-Photoroom.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll direction
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-black navbar z-50 transition-transform duration-300 ${
        scrollingDown ? '-top-[80px]' : 'top-0'
      }`}
    >
      <Link to='home'>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '120px',
            height: '80px',
            cursor: 'pointer',
            background: 'linear-gradient(90deg, white, #9CA3AF, white, #9CA3AF, white, #9CA3AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        />
      </Link>
      <div className='md:flex hidden flex-grow justify-end'>
        <ul className='flex'>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer text-white text-md hover:text-gray-400 transition-colors text-[18px] font-space gradient-text-animation'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer font-space text-white text-md hover:text-gray-400 text-[18px] transition-colors gradient-text-animation'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer font-space text-white text-md hover:text-gray-400 text-[18px] transition-colors gradient-text-animation'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className='block py-2 px-4 rounded-lg m-2 cursor-pointer font-space text-white text-md hover:text-gray-400 text-[18px] transition-colors gradient-text-animation'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} className='md:hidden z-10 bg-black text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={`${!nav ? 'hidden' : 'absolute top-[80px] left-0 w-full h-screen text-white bg-[#000000] flex flex-col items-center justify-center'}`}
      >
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className="gradient-text-animation font-space"
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className="gradient-text-animation font-space"
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className="gradient-text-animation font-space"
          >
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
            className="gradient-text-animation font-space"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
