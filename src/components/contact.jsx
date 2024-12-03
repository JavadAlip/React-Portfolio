import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    const emailAddress = 'javadalipp911@gmail.com';
    return (
        <div name='contact' className='w-full h-[200px] mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl inline font-bold hover:text-gray-400 border-b-4 rounded'>
                        Contact
                    </p>
                    <p className='mt-2'>Get in touch to collaborate</p>
                    <p className='text-2xl text-center border rounded p-4 mt-6 relative' style={{ borderRadius: '18px' }}>
                        {/* <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' ,  width: '18px', height: '18px', }} /> */}
                        <a href={`mailto:${emailAddress}`} className='text-black hover:text-gray-400'style={{ fontSize: 'smaller' }}>
                            {emailAddress}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Contact;


