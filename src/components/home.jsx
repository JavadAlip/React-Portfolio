import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen flex items-center justify-center bg-black"
    >
      <div className="max-w-[1000px] w-full px-8 flex flex-col justify-center h-full leading-snug relative z-10">
        <div className="mt-auto md:mt-0">
          <p className="text-[18px]  gradient-text-animation font-space">Hi, I am</p>
          <h1 className="font-semibold text-[50px] gradient-text-animation font-space">
            Javad Ali
          </h1>
          <h2 className="font-bold text-[50px] gradient-text-animation font-space">
            Full Stack Developer 
          </h2>
          <p className="mb-2 gradient-text-animation text-[18px] font-space">
          MERN Stack Developer with 1+ years of experience building scalable web apps. Focused on performance,
          security, user experience, and delivering innovative solutions through continuous learning
          and problem-solving.
          </p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/javadalip/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 gradient-icon  text-white hover:opacity-75"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/JavadAlip"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 gradient-icon text-white hover:opacity-75"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/javaaad.ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 gradient-icon  text-white hover:opacity-75"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;