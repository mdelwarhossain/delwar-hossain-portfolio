import React from 'react';
import portfolio from '../../assets/portfolio2.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>My Introduction</h1>
            <div id='about' className="hero min-h-screen lg:w-2/3 lg:mx-auto my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={portfolio} className="w-1/2 rounded-lg shadow-2xl" alt='profile' />
                    <div>
                        <h1 className="text-3xl font-bold">A passionate web developer</h1>
                        <p className="py-6">I am a fresher but confident in frontend engineering. I am comfortable in using modern frontend web technologies to develop a responsive professional website. I got effective communication skills and adaptive in a cosmopolitan and multifunctional team. I am a quick learner and always love to explore boyond my comfort zone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;