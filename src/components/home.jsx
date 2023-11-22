import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className='max-w-[1000] items-center h-full flex flex-col mx-auto px-8 justify-center'>
        <div>
        <p className='text-4xl '>Hi, I am</p>
        <h1 className='font-bold text-6xl '>Javad Ali</h1>
        <h2 className='font-bold text-6xl ' style={{ color: 'grey' }}>MERN Stack Developer.</h2>
        <p className='mb-4 max-w-[725px] '  style={{ color: 'grey' }}>A proficient full-stack developer specializing in Node.js & React. Committed to delivering top-notch solutions, I am driven by my passion for technology.</p>
        
          <a href="https://github.com/JavadAlip" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://github.com/JavadAlip" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          {/* <a href="https://leetcode.com/your--username" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src={leetcodeimg} alt="LeetCode" className='' />
          </a> */}

        
        </div>
        
      </div>
    </div>
  );
}

export default Home;
