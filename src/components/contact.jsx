import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    const emailAddress = 'javadalipp911@gmail.com';
    return (
        <div name='contact' className='w-full h-[200px] mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl inline font-bold border-b-4 rounded'>
                        Contact
                    </p>
                    <p className='text-2xl text-center border rounded p-4 mt-8 relative' style={{ borderRadius: '18px' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                        <a href={`mailto:${emailAddress}`} className='text-black'style={{ fontSize: 'smaller' }}>
                            {emailAddress}
                        </a>
                        <div className='absolute top-4 right-4 mt-2 mr-4 lg:mr-0 lg:mt-0'>
                            {/* Hide arrow icon on smaller devices */}
                            <a href="/" className='hidden lg:inline'>
                                <FontAwesomeIcon icon={faArrowCircleUp} />
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Contact;
