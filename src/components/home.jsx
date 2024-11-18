import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen flex items-center justify-center'>
      <div className='max-w-[1000px] w-full px-8 flex flex-col justify-center h-full'>
        <div className='mt-auto md:mt-0'>
          <p className='text-4xl  text-gray-400'>Hi, I am</p>
          <h1 className='font-bold text-6xl  text-gray-400'>Javad Ali</h1>
          <h2 className='font-bold text-6xl'>MERN Stack Developer</h2>
          <p className='mb-4 max-w-[725px]'>
            A skilled full-stack developer with expertise in Node.js and React. Committed to delivering high-quality solutions, my work is fueled by a genuine passion for technology.
          </p>
          <div className='flex'>
            <a href="https://github.com/JavadAlip" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-400">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/javadalip/" target="_blank" rel="noopener noreferrer" className="mr-4  hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/javaaad.ali/" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/JavadALIp" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-400">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
