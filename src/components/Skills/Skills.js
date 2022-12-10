import React from 'react';

const Skills = () => {
    return (
        <div className='min-h-screen my-10'>
            <h2 className='text-5xl font-bold text-center mb-6'>My Skills</h2>
            <h2 className='text-2xl font-bold text-center mb-10'>My competence goes here...</h2>
            <div className='flex justify-evenly'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center">Frontend Expertise</h2>
                        <div className='flex justify-evenly'>
                            <ul>
                                <li className='mb-5'>HTML5 <br /><small>intermidiate</small></li>
                                <li className='mb-5'>CSS3 <br /><small>intermidiate</small></li>
                                <li className='mb-5'>Bootstrap <br /><small>comfortable</small></li>
                            </ul>
                            <ul>
                                <li className='mb-5'>Tailwind <br /><small>comfortable</small></li>
                                <li className='mb-5'>Javascript <br /><small>intermidiate</small></li>
                                <li className='mb-5'>React.js <br /><small>comfortable</small></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Frontend Expertise</h2>
                        <div className='flex justify-evenly'>
                            <ul>
                                <li className='mb-5'>Node.js <br /><small>intermidiate</small></li>
                                <li className='mb-5'>Express.js <br /><small>intermidiate</small></li>
                            </ul>
                            <ul>
                                <li className='mb-5'>Mongodb <br /><small>intermidiate</small></li>
                                <li className='mb-5'>Firebase <br /><small>comfortable</small></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;