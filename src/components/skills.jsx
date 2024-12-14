// import React from "react";
// import Marquee from "react-fast-marquee";

// // Importing skill icons
// import HTML from "../assets/black-white/22-Photoroom.jpg";
// import CSS from "../assets/black-white/33-Photoroom.jpg";
// import JS from "../assets/black-white/444-Photoroom.jpg";
// import NODE from "../assets/black-white/node-js.png";
// import MONGO from "../assets/black-white/mongodb.png";
// import REACT from "../assets/black-white/react1-Photoroom.jpg";
// import TAILWIND from "../assets/black-white/tailwind-Photoroom.jpg";
// import STRIPE from "../assets/black-white/stripe1.jpg";
// import POSTMAN from "../assets/black-white/postman-Photoroom.jpg";
// import GIT from "../assets/black-white/git-Photoroom.jpg";
// import FIGMA from "../assets/black-white/figma-Photoroom.jpg";  
// import PHOTOSHOP from "../assets/black-white/Photoshop-Photoroom.jpg";
// import BOOTSTRAP from "../assets/black-white/boot.png";
// import EXPRESS from "../assets/download-Photoroom.jpg";
// import JWT from "../assets/black-white/jwt-Photoroom.jpg";
// import CANVA from "../assets/black-white/canva2-Photoroom.jpg";
// import SOCKET from "../assets/Socketio-Photoroom.jpg";
// import VERCEL from "../assets/vercal-Photoroom.jpg";
// import REDUX from "../assets/black-white/Redux-Photoroom.jpg";
// import SONARQUBE from "../assets/black-white/Sonarqube-Photoroom.jpg";
// import SLACK from "../assets/black-white/Slack-Photoroom.jpg";
// import RENDER from "../assets/Render-Photoroom.jpg";
// // import NODEMAILER from "../assets/Nodemailer1-Photoroom.jpg";
// import CLOUDINARY from "../assets/black-white/cloudinary1-Photoroom.jpg";

// const skillsData = [
//   { img: HTML, link: "https://html.com/", alt: "HTML" },
//   { img: CSS, link: "https://www.w3.org/Style/CSS/Overview.en.html", alt: "CSS" },
//   { img: JS, link: "https://www.javascript.com/", alt: "JavaScript" },
//   { img: NODE, link: "https://nodejs.org/en/", alt: "Node.js" },
//   { img: MONGO, link: "https://www.mongodb.com", alt: "MongoDB" },
//   { img: REACT, link: "https://legacy.reactjs.org", alt: "React" },
//   { img: TAILWIND, link: "https://tailwindcss.com", alt: "Tailwind CSS" },
//   { img: STRIPE, link: "https://stripe.com/in", alt: "Stripe" },
//   { img: POSTMAN, link: "https://www.postman.com", alt: "Postman" },
//   { img: GIT, link: "https://git-scm.com/", alt: "Git" },
//   { img: FIGMA, link: "https://www.figma.com", alt: "Figma" },
//   { img: PHOTOSHOP, link: "https://www.photoshop.com", alt: "Photoshop" },
//   { img: BOOTSTRAP, link: "https://getbootstrap.com/", alt: "Bootstrap" },
//   { img: EXPRESS, link: "https://expressjs.com", alt: "Express.js" },
//   { img: JWT, link: "https://jwt.io/", alt: "JWT" },  
//   { img: CANVA, link: "https://canva.com/", alt: "Canva" },
//   { img: SOCKET, link: "https://socket.io/", alt: "Socket.io" },
//   { img: VERCEL, link: "https://vercel.com/", alt: "Vercel" },
//   { img: REDUX, link: "https://redux.js.org/", alt: "Redux" },
//   { img: SONARQUBE, link: "https://www.sonarsource.com/products/sonarqube/", alt: "SonarQube" },
//   { img: SLACK, link: "https://slack.com/intl/en-in", alt: "Slack" },
//   { img: RENDER, link: "https://render.com/", alt: "Render" },
//   // { img: NODEMAILER, link: "https://www.nodemailer.com/", alt: "Nodemailer" },
//   { img: CLOUDINARY, link: "https://cloudinary.com/", alt: "Cloudinary" },
// ];

// const Skills = () => {
//   return (
//     <div name="skills" className=" sm:mt-0 bg-black">
//       <div className="max-w-[1000px] mx-auto  flex flex-col h-full w-full px-8 justify-center">
//         <div>
//           <p className="text-2xl inline border-b-2 border-[#9CA3AF] font-space text-white hover:text-gray-400 font-bold gradient-text-animation">
//             Skills
//           </p>
//           <p className="mt-2 text-white text-[18px] font-space gradient-text-animation">
//             Technologies I’ve explored
//           </p>
//         </div>

//         <Marquee
//           speed={150}
//           pauseOnHover={true}
//           gradient={false}
//           className="mt-8"
//         >
//           {skillsData.map((skill, index) => (
//             <a
//               key={index}
//               href={skill.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-shrink-0 mx-28"
//             >
//               <img
//                 src={skill.img}
//                 alt={skill.alt}
//                 className="w-24 h-24 mx-auto"
//               />
//             </a>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from "react";
import Marquee from "react-fast-marquee";

// Importing skill icons
import HTML from "../assets/black-white/22-Photoroom.jpg";
import CSS from "../assets/black-white/33-Photoroom.jpg";
import JS from "../assets/black-white/444-Photoroom.jpg";
import NODE from "../assets/black-white/node-js.png";
import MONGO from "../assets/black-white/mongodb.png";
import REACT from "../assets/black-white/react1-Photoroom.jpg";
import TAILWIND from "../assets/black-white/tailwind-Photoroom.jpg";
import STRIPE from "../assets/black-white/stripe1.jpg";
import POSTMAN from "../assets/black-white/postman-Photoroom.jpg";
import GIT from "../assets/black-white/git-Photoroom.jpg";
import FIGMA from "../assets/black-white/figma-Photoroom.jpg";  
import PHOTOSHOP from "../assets/black-white/Photoshop-Photoroom.jpg";
import BOOTSTRAP from "../assets/black-white/boot.png";
import EXPRESS from "../assets/download-Photoroom.jpg";
import JWT from "../assets/black-white/jwt-Photoroom.jpg";
import CANVA from "../assets/black-white/canva2-Photoroom.jpg";
import SOCKET from "../assets/Socketio-Photoroom.jpg";
import VERCEL from "../assets/vercal-Photoroom.jpg";
import REDUX from "../assets/black-white/Redux-Photoroom.jpg";
import SONARQUBE from "../assets/black-white/Sonarqube-Photoroom.jpg";
import SLACK from "../assets/black-white/Slack-Photoroom.jpg";
import RENDER from "../assets/Render-Photoroom.jpg";
// import NODEMAILER from "../assets/Nodemailer1-Photoroom.jpg";
import CLOUDINARY from "../assets/black-white/cloudinary1-Photoroom.jpg";

const skillsData = [
  { img: HTML, link: "https://html.com/", alt: "HTML" },
  { img: CSS, link: "https://www.w3.org/Style/CSS/Overview.en.html", alt: "CSS" },
  { img: JS, link: "https://www.javascript.com/", alt: "JavaScript",  style: { width: "110px", height: "110px" } },
  { img: NODE, link: "https://nodejs.org/en/", alt: "Node.js",style: { width: "120px", height: "110px" }  },
  { img: MONGO, link: "https://www.mongodb.com", alt: "MongoDB" },
  { img: REACT, link: "https://legacy.reactjs.org", alt: "React",style: { width: "120px", height: "100px" }  },
  { img: TAILWIND, link: "https://tailwindcss.com", alt: "Tailwind CSS", style: { width: "100px", height: "100px" }  },
  { img: STRIPE, link: "https://stripe.com/in", alt: "Stripe" },
  { img: POSTMAN, link: "https://www.postman.com", alt: "Postman",style: { width: "95px", height: "80px" } },
  { img: GIT, link: "https://git-scm.com/", alt: "Git" },
  { img: FIGMA, link: "https://www.figma.com", alt: "Figma" },
  { img: PHOTOSHOP, link: "https://www.photoshop.com", alt: "Photoshop" },
  { img: BOOTSTRAP, link: "https://getbootstrap.com/", alt: "Bootstrap", style: { width: "120px", height: "120px" } },
  { img: EXPRESS, link: "https://expressjs.com", alt: "Express.js", style: { width: "110px", height: "110px" } },
  { img: JWT, link: "https://jwt.io/", alt: "JWT" },  
  { img: CANVA, link: "https://canva.com/", alt: "Canva" ,style: { width: "100px", height: "100px" } },
  { img: SOCKET, link: "https://socket.io/", alt: "Socket.io",style: { width: "85px", height: "85px" } },
  { img: VERCEL, link: "https://vercel.com/", alt: "Vercel",style: { width: "85px", height: "85px" } },
  { img: REDUX, link: "https://redux.js.org/", alt: "Redux" ,style: { width: "85px", height: "85px" }},
  { img: SONARQUBE, link: "https://www.sonarsource.com/products/sonarqube/", alt: "SonarQube" },
  { img: SLACK, link: "https://slack.com/intl/en-in", alt: "Slack",style: { width: "85px", height: "85px" } },
  { img: RENDER, link: "https://render.com/", alt: "Render", style: { width: "105px", height: "100px" } },
  // { img: NODEMAILER, link: "https://www.nodemailer.com/", alt: "Nodemailer" },
  { img: CLOUDINARY, link: "https://cloudinary.com/", alt: "Cloudinary", style: { width: "100px", height: "90px" } },
];

const Skills = () => {
  return (
    <div name="skills" className="sm:mt-0 bg-black">
      <div className="max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center">
        <div>
          <p className="text-2xl inline border-b-2 border-[#9CA3AF] font-space text-white hover:text-gray-400 font-bold gradient-text-animation">
            Skills
          </p>
          <p className="mt-2 text-white text-[18px] font-space gradient-text-animation">
            Technologies I’ve explored
          </p>
        </div>

        <Marquee speed={100} pauseOnHover={true} gradient={false} className="mt-8">
          {skillsData.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-32"
            >
              <img
                src={skill.img}
                alt={skill.alt}
                style={skill.style}  // Correctly referencing style
                className="w-24 h-24 mx-auto"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
