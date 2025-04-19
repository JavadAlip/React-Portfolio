import React from 'react';
const Contact = () => {
    const emailAddress = 'javadalidev@gmail.com';
    return (
        <div name='contact' className='w-full bg-black h-[200px] sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full px-8 justify-center'>
                <div>
                    <p className='text-2xl font-space text-white inline font-bold hover:text-gray-400 border-b-2 border-[#9CA3AF] rounded gradient-text-animation'>
                        Contact
                    </p>
                    <p className='mt-2 text-white gradient-text-animation font-space text-[18px]' >Get in touch to collaborate</p>
                    <p className='text-2xl text-center border rounded p-4 mt-6 relative' style={{ borderRadius: '18px' }}>
                        <a href={`mailto:${emailAddress}`} className=' font-space gradient-text-animation text-[18px] hover:text-gray-400' style={{ fontSize: 'smaller' }}>
                            {emailAddress}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Contact;


