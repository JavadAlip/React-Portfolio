import React from "react";
import Marquee from "react-fast-marquee";

// Importing skill icons
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import NODE from "../assets/node.png";
import MONGO from "../assets/mongo.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import STRIPE from "../assets/stripe.png";
import POSTMAN from "../assets/postman.png";
import GIT from "../assets/git.png";
import FIGMA from "../assets/figma.jpg";
import PHOTOSHOP from "../assets/photoshop1.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import EXPRESS from "../assets/express.png";
import JWT from "../assets/jwt.png";
import CANVA from "../assets/Canva1.png";
import SOCKET from "../assets/Socketio.png";
import VERCEL from "../assets/vercal.png";
import REDUX from "../assets/Redux.png";
import SONARQUBE from "../assets/Sonarqube.png";
import SLACK from "../assets/Slack.png";
import RENDER from "../assets/Render.png";
import NODEMAILER from "../assets/Nodemailer1.png";
import CLOUDINARY from "../assets/cloudinary1.png";

const skillsData = [
  { img: HTML, link: "https://html.com/", alt: "HTML" },
  { img: CSS, link: "https://www.w3.org/Style/CSS/Overview.en.html", alt: "CSS" },
  { img: JS, link: "https://www.javascript.com/", alt: "JavaScript" },
  { img: NODE, link: "https://nodejs.org/en/", alt: "Node.js" },
  { img: MONGO, link: "https://www.mongodb.com", alt: "MongoDB" },
  { img: REACT, link: "https://legacy.reactjs.org", alt: "React" },
  { img: TAILWIND, link: "https://tailwindcss.com", alt: "Tailwind CSS" },
  { img: STRIPE, link: "https://stripe.com/in", alt: "Stripe" },
  { img: POSTMAN, link: "https://www.postman.com", alt: "Postman" },
  { img: GIT, link: "https://git-scm.com/", alt: "Git" },
  { img: FIGMA, link: "https://www.figma.com", alt: "Figma" },
  { img: PHOTOSHOP, link: "https://www.photoshop.com", alt: "Photoshop" },
  { img: BOOTSTRAP, link: "https://getbootstrap.com/", alt: "Bootstrap" },
  { img: EXPRESS, link: "https://expressjs.com", alt: "Express.js" },
  { img: JWT, link: "https://jwt.io/", alt: "JWT" },
  { img: CANVA, link: "https://canva.com/", alt: "Canva" },
  { img: SOCKET, link: "https://socket.io/", alt: "Socket.io" },
  { img: VERCEL, link: "https://vercel.com/", alt: "Vercel" },
  { img: REDUX, link: "https://redux.js.org/", alt: "Redux" },
  { img: SONARQUBE, link: "https://www.sonarsource.com/products/sonarqube/", alt: "SonarQube" },
  { img: SLACK, link: "https://slack.com/intl/en-in", alt: "Slack" },
  { img: RENDER, link: "https://render.com/", alt: "Render" },
  { img: NODEMAILER, link: "https://www.nodemailer.com/", alt: "Nodemailer" },
  { img: CLOUDINARY, link: "https://cloudinary.com/", alt: "Cloudinary" },
];

const Skills = () => {
  return (
    <div name="skills" className="mt-16 sm:mt-0">
      <div className="max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center">
        <div>
          <p className="text-2xl inline border-b-4 hover:text-gray-400 font-bold">
            Skills
          </p>
          <p className="mt-2">Technologies I’ve explored</p>
        </div>
        <Marquee
          speed={80}
          pauseOnHover={true}
          gradient={false}
          className="mt-8"
        >
          {skillsData.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-28" 
            >
              <img
                src={skill.img}
                alt={skill.alt}
                className="w-20 h-20 mx-auto"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
