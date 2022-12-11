import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const [projectDetails, setProjectDetails] = useState([]);
    // useEffect(() => {
    //     fetch('projects.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setProjects(data)
    //         })
    // }, [projects])

    const { data: projects = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('projects.json');
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div id='portfolio' className='min-h-screen my-10'>
            <h2 className='text-5xl font-bold text-center my-5'>My Projects</h2>
            <h2 className='text-2xl font-semibold text-center'>Here is my last 3 projects</h2>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-10 justify-center'>
                {
                    projects?.map(project => <ProjectDetails
                        key={project.id}
                        project={project}
                        setProjectDetails={setProjectDetails}
                    ></ProjectDetails>)
                }
            </div>
            <div>
                {
                    projectDetails && 
                    <Modal
                        projectDetails={projectDetails}
                        setProjectDetails={setProjectDetails}
                    ></Modal>
                }
            </div>
        </div>
    );
};

export default Projects;