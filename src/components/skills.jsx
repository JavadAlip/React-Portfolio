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
import VERCEL from '../assets/vercal.png'
const Skills = () => {
    return (
        <div name='skills' className='mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl inline border-b-4  font-bold '>Skills</p>
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
                </div>
            </div>
        </div>
    )
}
export default Skills


// import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JS from '../assets/javascript.png';
// import NODE from '../assets/node.png';
// import MONGO from '../assets/mongo.png';
// import REACT from '../assets/react.png';
// import TAILWIND from '../assets/tailwind.png';
// import STRIPE from '../assets/stripe.png';
// import POSTMAN from '../assets/postman.png';
// import GIT from '../assets/git.png';
// import FIGMA from '../assets/figma.jpg';
// import PHOTOSHOP from '../assets/photoshop1.png';
// import BOOTSTRAP from '../assets/bootstrap.png';
// import EXPRESS from '../assets/express.png';
// import JWT from '../assets/jwt.png';
// import CANVA from '../assets/Canva1.png';
// import SOCKET from '../assets/Socketio.png';
// import VERCEL from '../assets/vercal.png';

// const Skills = () => {
//     const iconSize = '80px';

//     // Inline styles for grid container
//     const gridContainerStyle = {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(6, 1fr)', // 6 columns by default
//         gap: '20px',
//         padding: '20px',
//     };

//     const iconStyle = {
//         width: iconSize,
//         height: iconSize,
//         margin: 'auto',
//     };

//     // Array of icons
//     const icons = [
//         HTML, CSS, JS, NODE, MONGO, REACT,
//         TAILWIND, STRIPE, POSTMAN, GIT, FIGMA, PHOTOSHOP,
//         BOOTSTRAP, EXPRESS, JWT, CANVA, SOCKET, VERCEL
//     ];

//     return (
//         <div name='skills' className='mt-16 sm:mt-0'>
//             <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
//                 <div>
//                     <p className='text-2xl inline border-b-4 font-bold'>Skills</p>
//                     <p className='mt-2'>These are technologies I've worked with</p>
//                 </div>
//                 <div style={gridContainerStyle}>
//                     {icons.map((src, index) => (
//                         <img key={index} src={src} alt={`Skill ${index}`} style={iconStyle} />
//                     ))}
//                 </div>
//                 <style>
//                     {`
//                         @media (max-width: 768px) {
//                             div[style*="grid-template-columns: repeat(6, 1fr)"] {
//                                 grid-template-columns: repeat(3, 1fr); // 3 columns for smaller screens
//                             }
//                         }
//                     `}
//                 </style>
//             </div>
//         </div>
//     );
// }

// export default Skills;
