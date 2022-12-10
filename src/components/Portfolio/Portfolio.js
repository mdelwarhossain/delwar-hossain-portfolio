import React from 'react';
import project1 from '../../assets/project1.svg'

const Portfolio = () => {
    return (
        <div id='portfolio' className='min-h-screen my-10'>
            <h2 className='text-5xl font-bold text-center my-5'>My Projects</h2>
            <h2 className='text-2xl font-semibold text-center'>Here is my last 3 projects</h2>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-10 justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Old Books</h2>
                    <a className='text-green-600' href="https://resale-books-a74e3.web.app/" target="_blank" rel="noreferrer">Browse Website</a>
                    <div className="card-actions">
                        <button className="btn btn-accent">See Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Photography Website</h2>
                    <a className='text-green-600' href="https://photography-assignment-b3b07.web.app/" target="_blank" rel="noreferrer">Browse Website</a>
                    <div className="card-actions">
                        <button className="btn btn-accent">See Details</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">IT Schools</h2>
                    <a className='text-green-600' href="https://learning-platform-client-41d2f.web.app/" target="_blank" rel="noreferrer">Browse Website</a>
                    <div className="card-actions">
                        <button className="btn btn-accent">See Details</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Portfolio;