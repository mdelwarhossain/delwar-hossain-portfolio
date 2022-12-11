import React from 'react';
import portfolio from '../../assets/portfolio1.jpg'

const Home = () => {
    return (
        <div id='home' className="hero min-h-screen lg:w-2/3 lg:mx-auto my-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={portfolio} className="md:w-1/2 w-3/4 max-h-screen rounded-lg shadow-2xl" alt='profile'/>
                <div>
                    <h1 className="text-5xl font-bold"><span className='text-accent'>Hi!!!</span><br /> I'm Md. Delwar Hossain</h1>
                    <p className="py-6">Junior Frontend Engineer. Develope responsive website using modern web technologies.</p>
                    <a className='btn btn-accent' href="https://drive.google.com/uc?export=download&id=1z5Zhk6beBiG-JGoVFRRic1q1TJp-dSCJ">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Home;