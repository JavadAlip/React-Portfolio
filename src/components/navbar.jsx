import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav]=useState(false)
  const handleClick=()=> setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-white bg-[#000000] '>
      dev.jvd
    <div >
      <ul className='md:flex hidden'>
      <li>Home</li>
      <li>Projects</li>
      <li>Skills</li>
      <li>Contact</li>
      </ul>
    </div>

    <div onClick={handleClick} className='md:hidden z-10'>
    <FaBars/>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col items-center justify-center'}>
      <li className='py-6 text-4xl'>Home</li>
      <li className='py-6 text-4xl'>Projects</li>
      <li className='py-6 text-4xl'>skills</li>
      <li className='py-6 text-4xl'>Contact</li>
    </ul>
    </div>
  );
};
export default Navbar;
