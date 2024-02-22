import React from 'react';
import Pro1 from '../assets/Screenshot1.jpg';
import Pro2 from '../assets/Screenshot2.jpg';
const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-2xl inline border-b-4 font-bold'>Projects</p>
                    <p className='mt-2'>Check out my recent projects</p>
                </div>
                <div className='grid gap-4 md:grid-cols-2 rounded-lg'>
                    <div>
                        <div style={{ backgroundImage: `url('${Pro1}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                {/* <span className='text-2xl font-bold text-white '>
                                    e-commerce
                                </span> */}
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/JavadAlip/Menstyle">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 font-bold text-md hover:bg-gray-100'>Code</button>
                                    </a>
                                    <a href="http://ecommerce.menstyle.online">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 font-bold text-md hover:bg-gray-100'>Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ backgroundImage: `url('${Pro2}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                {/* <span className='text-2xl font-bold text-black '>
                                    Another Projectddddddd
                                </span> */}
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/JavadAlip/mediplus">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 font-bold text-md hover:bg-gray-100'>Code</button>
                                    </a>
                                    <a href="">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 font-bold text-md hover:bg-gray-100'>Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
