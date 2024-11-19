import React from 'react';
import Pro1 from '../assets/Mediplus-Banner.jpg';
import Pro2 from '../assets/CareClub-Banner.png';
import Pro3 from '../assets/DigitalVisit-Banner.png';
import Pro4 from '../assets/Menstyle-Banner.jpg';
const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-2xl inline border-b-4 hover:text-gray-400 font-bold'>Projects</p>
                    <p className='mt-2'>Check out my recent projects</p>
                </div>
                <div className='grid gap-4 md:grid-cols-2 rounded-lg'> 
                    <div>
                        <div style={{ backgroundImage: `url('${Pro1}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/JavadAlip/mediplus">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
                                    </a>
                                    <a href="https://mediplus-booking.vercel.app/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ backgroundImage: `url('${Pro2}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'> 
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/JavadAlip/CareClub">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
                                    </a>
                                    <a href="https://careclub.vercel.app/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ backgroundImage: `url('${Pro3}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/teamleadseclob/digital_visiting_card_website">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
                                    </a>
                                    <a href="https://ecard.seclob.com/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ backgroundImage: `url('${Pro4}')`, height: '205px', backgroundSize: 'contain', backgroundPosition: 'center' }} className='shadow-lg group shadow-[#808080] container rounded-md flex items-center mx-auto content-div justify-center'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/JavadAlip/Menstyle">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-black font-bold text-md hover:bg-gray-300 transition-colors'>Code</button>
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
