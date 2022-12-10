import React from 'react';

const Contact = () => {
    return (
        <div className="hero min-h-screen w-2/3 mx-auto">
                <div className="card w-full shadow-2xl">
                <h1 className='text-5xl text-bold text-center mt-5'>Reach Me</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="write your message here..."></textarea>
                        </div>
                        <button className="btn btn-active btn-accent">Button</button>
                    </div>
                </div>  
        </div>
    );
};

export default Contact;