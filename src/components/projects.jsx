import React from 'react';
import Pro1 from '../assets/Mediplus-Banner.jpg';
import Pro2 from '../assets/Pro2.png';
import Pro3 from '../assets/GoWeatherNow-Banner.png';
import Pro4 from '../assets/Menstyle-Banner.jpg';
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";



const projects = [
    {
        name: "MediPlus",
        description: "Built a MERN-based doctor appointment platform with responsive Tailwind CSS design, real-time chat via Socket.IO, secure Stripe payments, Cloudinary for image handling, and a review system for rating and feedback.",
        image: Pro1,
        liveLink: "https://mediplus-booking.vercel.app/",
        codeLink: "https://github.com/JavadAlip/mediplus",
    },
    {
        name: "CareClub",
        description: "Built a MERN charity platform with Stripe donations, volunteer sign-ups with email confirmation, responsive Tailwind UI, Redux state management, and a secure admin dashboard for managing events, donors, and volunteers.",
        image: Pro2,
        liveLink: "https://careclub.vercel.app/",
        codeLink: "https://github.com/JavadAlip/CareClub",
    },
    {
        name: "GoWeatherNow",
        description: "Real-Time Weather App built with React, Tailwind CSS, and Weather API. Instantly fetch detailed weather data for any location worldwide. Sleek design, responsive interface. Stay informed effortlessly.",
        image: Pro3,
        liveLink: "https://goweather-now.vercel.app/",
        codeLink: "https://github.com/JavadAlip/Weather-App",
    },
    {
        name: "MenStyle",
        description: "Developed a clothing e-commerce site with Node.js, Express, MongoDB, and HBS. Features include Razorpay payments, cart/wishlist, wallet refunds, and admin control for users, coupons, and account management.",
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
                            className="relative group font-space bg-black border text-white rounded-xl shadow-lg overflow-hidden h-[260px] transition-all duration-500"
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
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10 px-4">
                                <h3 className="text-2xl font-bold gradient-text-animation mb-3">{project.name}</h3>
                                <p className="text-[14px] text-gray-400 gradient-text-animation leading-tight mb-8">
                                    {project.description}
                                </p>
                            </div>

                            {/* Icons - Positioned near bottom */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 group-hover:bottom-8 flex gap-6 opacity-100 transition-all duration-500 z-20">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-300 group-hover:text-black text-2xl group-hover:text-4xl transition-all duration-500"
                                    >
                                        <AiOutlineGlobal />
                                    </a>
                                )}
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-300 group-hover:text-black text-2xl group-hover:text-4xl transition-all duration-500"
                                >
                                    <FaGithub />
                                </a>
                            </div>

                            {/* Gradient Fade Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
