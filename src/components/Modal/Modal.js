import React from 'react';

const Modal = ({ projectDetails, setProjectDetails }) => {

    const { title, frontend, backend, description, features, slides } = projectDetails;
    console.log(projectDetails);

    return (
        <div>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => setProjectDetails(null)}>✕</label>
                    <div>
                    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slides?.slide1} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slides?.slide2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slides?.slide3} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
                    </div>
                    <h3 className="text-lg font-bold text-center">{title}</h3>
                    <p className="py-4">{description}</p>
                    <ul>
                        <li className='text-center'><span className='text-green-600 font-bold'>Features:</span> <br />{features?.feature1}</li>
                        <li className='text-center'><br /> {features?.feature2}</li>
                    </ul>
                    <div className='flex justify-evenly'>
                        <a className='text-green-600' href={frontend} target="_blank" rel="noreferrer">Frontend</a>
                        <a className='text-green-600' href={backend} target="_blank" rel="noreferrer">Backend</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;