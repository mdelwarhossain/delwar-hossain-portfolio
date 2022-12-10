import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_miv0zzo', 'template_1zxnlwf', form.current, 'l5vhANlvQq6cUUfjV')
            .then((result) => {
                console.log(result.text);
                toast.success('message has been sent successfully')
            }, (error) => {
                console.log(error.text);
                toast.error(error.message)
            });
        e.target.reset()
    };

    return (
        <div id='contact' className="hero min-h-screen w-2/3 mx-auto">
            <div className="card w-full shadow-2xl">
                <h1 className='text-5xl font-bold text-center mt-5'>Reach Me</h1>
                <form ref={form} onSubmit={sendEmail} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name='message' className="textarea textarea-bordered w-full" placeholder="write your message here..."></textarea>
                    </div>
                    <button className="btn btn-active btn-accent">Button</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;