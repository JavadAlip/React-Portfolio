import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import leetCodeIcon from '../assets/leetcode.png';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      <div className='max-w-[1000px] items-center h-full flex flex-col mx-auto px-8 justify-center'>
        <div>
          <p className='text-4xl '>Hi, I am</p>
          <h1 className='font-bold text-6xl '>Javad Ali</h1>
          <h2 className='font-bold text-6xl ' style={{ color: 'grey' }}>MERN Stack Developer.</h2>
          <p className='mb-4 max-w-[725px] '  style={{ color: 'grey' }}>A skilled full-stack developer with expertise in Node.js and React. Committed to delivering high-quality solutions, my work is fueled by a genuine passion for technology.</p>
          <a href="https://github.com/JavadAlip" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/javadalip/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <div className='absolute top-100 left-100px' style={{ marginTop: '-35px', marginLeft: '90px' }}> 
            <a href="https://leetcode.com/JavadAlip/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={leetCodeIcon} alt="LeetCode" className='w-8 h-8' />
            </a>
          </div>
          <div className='absolute top-100 left-100px' style={{ marginTop: '-35px', marginLeft: '135px' }}> 
            <a href="https://www.instagram.com/javaaad.ali/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className='absolute top-100 left-100px' style={{ marginTop: '-35px', marginLeft: '175px' }}> 
            <a href="https://twitter.com/JavadALIp" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

