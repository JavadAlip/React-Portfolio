import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import NODE from '../assets/node.png';
import MONGO from '../assets/mongo.png';
import REACT from '../assets/react.png';
import TAILWIND from '../assets/tailwind.jpg';
import FIREBASE from '../assets/firebase1.png';
import POSTMAN from '../assets/postman.png';
import GIT from '../assets/git.png';
import FIGMA from '../assets/figma.jpg';
import PHOTOSHOP from '../assets/photoshop1.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import EXPRESS from '../assets/express.png';
import JWT from '../assets/jwt.png';
import CANVA from '../assets/Canva1.png';
import SOCKET from '../assets/Socketio.png';
import VERCEL from '../assets/vercal.png'

const Skills = () => {
    return (
        <div name='skills' >
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl inline border-b-4  font-bold '>Skills</p>
                    <p className='mt-2'>These are technologys I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-8'>
                    <a href="https://html.com/">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={HTML} alt="" />
                        </div>
                    </a>
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={CSS} alt="" />
                        </div>
                    </a>
                    <a href='https://www.javascript.com/'>
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={JS} alt="" />
                        </div>
                    </a>
                    <a href="https://nodejs.org/en/" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={NODE} alt="" />
                        </div>
                    </a>
                    <a href="https://www.photoshop.com">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={EXPRESS} alt="" />
                        </div>
                    </a>
                    <a href="https://legacy.reactjs.org" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={REACT} alt="" />
                        </div>
                    </a>
                    <a href="https://www.mongodb.com" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={MONGO} alt="" />
                        </div>
                    </a>
                    <a href="https://firebase.google.com/" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={FIREBASE} alt="" />
                        </div>
                    </a>
                    <a href="https://tailwindcss.com" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={TAILWIND} style={{ width: '100px', height: '82px' }} alt="" />
                        </div>
                    </a>
                     <a href="https://getbootstrap.com/" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={BOOTSTRAP}  alt="" />
                        </div>
                    </a>
                    <a href="https://jwt.io/">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={JWT} alt="" />
                        </div>
                    </a>
                    <a href="https://www.postman.com" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={POSTMAN} style={{ width: '130px', height: '80px' }} alt="" />
                        </div>
                    </a>
                    <a href="https://git-scm.com/" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={GIT} alt="" />
                        </div>
                    </a>
                    <a href="https://socket.io/">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={SOCKET} alt="" />
                        </div>
                    </a>
                    <a href="https://www.figma.com" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={FIGMA} alt="" />
                        </div>
                    </a>
                    <a href="https://www.photoshop.com" >
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 mx-auto' src={PHOTOSHOP} alt="" />
                        </div>
                    </a>
                    <a href="https://canva.com/">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={CANVA} alt="" />
                        </div>
                    </a>
                    <a href="https://vercel.com/">
                        <div className='shadow-md shadow-[#808080] hover:scale-110 duration-500 rounded-lg'>
                            <img className='w-20 h-20 mx-auto' src={VERCEL} alt="" />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Skills