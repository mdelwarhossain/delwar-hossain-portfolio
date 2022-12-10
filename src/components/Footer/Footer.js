import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 rounded">
            <h1 className='text-5xl font-bold'>Mohammad Delwar Hossain</h1>
            <div className="grid grid-flow-col gap-4">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/mohammad-delwar-hossain/' target="_blank" rel="noreferrer"><span className='text-3xl'><FaLinkedin></FaLinkedin></span></a>
                    <a href='https://github.com/mdelwarhossain' target="_blank" rel="noreferrer"><span className='text-3xl'><FaGithubSquare></FaGithubSquare></span ></a>
                    <a href='https://www.facebook.com/delwarhossain88/' target="_blank" rel="noreferrer"><span className='text-3xl'><FaFacebookSquare></FaFacebookSquare></span></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md. Delwar Hossain</p>
            </div>
        </footer>
    );
};

export default Footer;