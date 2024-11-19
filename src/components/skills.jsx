import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import NODE from '../assets/node.png';
import MONGO from '../assets/mongo.png';
import REACT from '../assets/react.png';
import TAILWIND from '../assets/tailwind.png';
import STRIPE from '../assets/stripe.png';
import POSTMAN from '../assets/postman.png';
import GIT from '../assets/git.png';
import FIGMA from '../assets/figma.jpg';
import PHOTOSHOP from '../assets/photoshop1.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import EXPRESS from '../assets/express.png';
import JWT from '../assets/jwt.png';
import CANVA from '../assets/Canva1.png';
import SOCKET from '../assets/Socketio.png';
import VERCEL from '../assets/vercal.png';
import REDUX from '../assets/Redux.png';
import SONARQUBE from '../assets/Sonarqube.png';
import SLACK from '../assets/Slack.png';
import RENDER from '../assets/Render.png';
import NODEMAILER from '../assets/Nodemailer1.png';
import CLOUDINARY from '../assets/cloudinary1.png';

const Skills = () => {
    return (
        <div name='skills' className='mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl inline border-b-4 hover:text-gray-400 font-bold '>Skills</p>
                    <p className='mt-2'>These are technologys I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-cols-6 text-center gap-4 py-8'>
                    <a href="https://html.com/">
                        <div>
                            <img className='w-20 mx-auto' src={HTML} alt="" />
                        </div>
                    </a>
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                        <div>
                            <img className='w-20 mx-auto' src={CSS} alt="" />
                        </div>
                    </a>
                    <a href='https://www.javascript.com/'>
                        <div>
                            <img className='w-20 mx-auto' src={JS} alt="" />
                        </div>
                    </a>
                    <a href="https://nodejs.org/en/" >
                        <div>
                            <img className='w-20 mx-auto' src={NODE} alt="" />
                        </div>
                    </a>
                    <a href="https://www.photoshop.com">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={EXPRESS} alt="" />
                        </div>
                    </a>
                    <a href="https://legacy.reactjs.org" >
                        <div>
                            <img className='w-20 mx-auto' src={REACT} alt="" />
                        </div>
                    </a>
                    <a href="https://www.mongodb.com" >
                        <div>
                            <img className='w-20 mx-auto' src={MONGO} alt="" />
                        </div>
                    </a>
                    <a href="https://stripe.com/in" >
                        <div>
                            <img className='w-20 h-20 mx-auto' src={STRIPE} alt="" />
                        </div>
                    </a>
                    <a href="https://tailwindcss.com" >
                        <div>
                            <img className='w-20 mx-auto' src={TAILWIND} style={{ width: '100px', height: '82px' }} alt="" />
                        </div>
                    </a>
                     <a href="https://getbootstrap.com/" >
                        <div>
                            <img className='w-20 h-20 mx-auto' src={BOOTSTRAP}  alt="" />
                        </div>
                    </a>
                    <a href="https://jwt.io/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={JWT} alt="" />
                        </div>
                    </a>
                    <a href="https://www.postman.com" >
                        <div>
                            <img className='w-20 mx-auto' src={POSTMAN} style={{ width: '130px', height: '80px' }} alt="" />
                        </div>
                    </a>
                    <a href="https://git-scm.com/" >
                        <div>
                            <img className='w-20 mx-auto' src={GIT} alt="" />
                        </div>
                    </a>
                    <a href="https://socket.io/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={SOCKET} alt="" />
                        </div>
                    </a>
                    <a href="https://www.figma.com" >
                        <div>
                            <img className='w-20 mx-auto' src={FIGMA} alt="" />
                        </div>
                    </a>
                    <a href="https://www.photoshop.com" >
                        <div>
                            <img className='w-20 mx-auto' src={PHOTOSHOP} alt="" />
                        </div>
                    </a>
                    <a href="https://canva.com/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={CANVA} alt="" />
                        </div>
                    </a>
                    <a href="https://vercel.com/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={VERCEL} alt="" />
                        </div>
                    </a>
                    <a href="https://redux.js.org/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={REDUX} alt="" />
                        </div>
                    </a>
                    <a href="https://www.sonarsource.com/products/sonarqube/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={SONARQUBE} alt="" />
                        </div>
                    </a>
                    <a href="https://slack.com/intl/en-in">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={SLACK} alt="" />
                        </div>
                    </a>
                    <a href="https://render.com/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={RENDER} alt="" />
                        </div>
                    </a>
                    <a href="https://www.nodemailer.com/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={NODEMAILER} alt="" />
                        </div>
                    </a>
                    <a href="https://cloudinary.com/">
                        <div>
                            <img className='w-20 h-20 mx-auto' src={CLOUDINARY} alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Skills

