const ProjectDetails = ({project, setProjectDetails}) => {
    const {title, url, website} = project; 
    
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={url} alt="Shoes" className="rounded-xl max-h-40 min-w-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <a className='text-green-600' href={website} target="_blank" rel="noreferrer">Browse Website</a>
                <div className="card-actions">
                <label htmlFor="project-modal" className="btn btn-accent" onClick={() => setProjectDetails(project)}>See Details</label>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;