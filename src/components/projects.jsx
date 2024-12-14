// import React from 'react';
// import Pro1 from '../assets/Mediplus-Banner.jpg';
// import Pro2 from '../assets/Pro2.png';
// import Pro3 from '../assets/DigitalVisit-Banner.png';
// import Pro4 from '../assets/Menstyle-Banner.jpg';
// const Projects = () => {
//     return (
//         <div name='projects' className='w-full md:h-screen bg-black sm:mt-0'>
//             <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
//                 <div className='pb-8'>
//                     <p className='text-2xl inline font-space border-b-2 border-[#9CA3AF] hover:text-gray-400 text-white font-bold gradient-text-animation'>Projects</p>
//                     <p className='mt-2 text-white font-space gradient-text-animation'>Check out my recent projects</p>
//                 </div>
//                 <div className='grid gap-4 md:grid-cols-2 rounded-lg'>
//                     <div>
//                         <div style={{ backgroundImage: `url('${Pro1}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
//                             <div className='opacity-0 group-hover:opacity-100'>
//                                 <div className='pt-8 text-center'>
//                                     <a href="https://mediplus-booking.vercel.app/">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
//                                     </a>
//                                     <a href="https://github.com/JavadAlip/mediplus">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div style={{ backgroundImage: `url('${Pro2}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
//                             <div className='opacity-0 group-hover:opacity-100'>
//                                 <div className='pt-8 text-center'>
//                                     <a href="https://careclub.vercel.app/">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
//                                     </a>
//                                     <a href="https://github.com/JavadAlip/CareClub">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div style={{ backgroundImage: `url('${Pro3}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
//                             <div className='opacity-0 group-hover:opacity-100'>
//                                 <div className='pt-8 text-center'>
//                                     <a href="https://ecard.seclob.com/">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
//                                     </a>
//                                     <a href="https://github.com/teamleadseclob/digital_visiting_card_website">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div style={{ backgroundImage: `url('${Pro4}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
//                             <div className='opacity-0 group-hover:opacity-100'>
//                                 <div className='pt-8 text-center'>
//                                     <a href="https://github.com/JavadAlip/Menstyle">
//                                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Projects;



import React from 'react';
import Pro1 from '../assets/Mediplus-Banner.jpg';
import Pro2 from '../assets/Pro2.png';
import Pro3 from '../assets/DigitalVisit-Banner.png';
import Pro4 from '../assets/Menstyle-Banner.jpg';
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const projects = [
    {
        name: "MediPlus",
        description: "Online healthcare booking platform",
        image: Pro1,
        liveLink: "https://mediplus-booking.vercel.app/",
        codeLink: "https://github.com/JavadAlip/mediplus",
    },
    {
        name: "CareClub",
        description: "Comprehensive charity support platform",
        image: Pro2,
        liveLink: "https://careclub.vercel.app/",
        codeLink: "https://github.com/JavadAlip/CareClub",
    },
    {
        name: "VisitCard",
        description: "Smart digital visiting card generator",
        image: Pro3,
        liveLink: "https://ecard.seclob.com/",
        codeLink: "https://github.com/teamleadseclob/digital_visiting_card_website",
    },
    {
        name: "MenStyle",
        description: "E-commerce platform for men’s fashion",
        image: Pro4,
        liveLink: null,
        codeLink: "https://github.com/JavadAlip/Menstyle",
    },
];
const Projects = () => {
    return (
        <div name="projects" className="w-full bg-black py-10">
            <div className="max-w-[1000px] mx-auto px-8">
                <div>
                    <p className="text-2xl inline border-b-2 border-[#9CA3AF] font-space text-white hover:text-gray-400 font-bold gradient-text-animation">
                        Projects
                    </p>
                    <p className="mt-2 text-white text-[18px] font-space gradient-text-animation">
                        Check out my recent projects
                    </p>
                </div>
                <div className="grid md:grid-cols-2 mt-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group font-space bg-black border text-white rounded-xl shadow-lg overflow-hidden h-[220px] transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                }}
                            ></div>

                            {/* Overlay Shadow */}
                            <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:bg-opacity-0 transition-opacity duration-500"></div>

                            {/* Initial Content */}
                            <div className="absolute inset-0 flex flex-col justify-center bottom-11 items-center text-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10">
                                <h3 className="text-3xl font-bold gradient-text-animation">{project.name}</h3>
                                <p className="text-[18px] mt-2 text-gray-400 gradient-text-animation">{project.description}</p>
                            </div>

                            {/* Icons at the bottom (always visible) */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 mt-11 transform -translate-x-1/2 flex gap-4 opacity-100 transition-opacity duration-500 z-10">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white group-hover:text-black text-2xl group-hover:text-5xl "
                                    >
                                        <AiOutlineGlobal />
                                    </a>
                                )}
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white group-hover:text-black text-2xl group-hover:text-5xl "
                                >
                                    <FaGithub />
                                </a>
                            </div>

                            {/* Gradient fade color from the bottom on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};




export default Projects;

