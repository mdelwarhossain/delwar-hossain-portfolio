import React from 'react';

const About = () => {
    return (
        <div id='about' className="hero min-h-screen lg:w-2/3 lg:mx-auto my-5">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="w-1/2 rounded-lg shadow-2xl" alt='profile' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;