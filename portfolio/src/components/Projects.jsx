import React from 'react'
import { PROJECTS } from '../constants'
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-16 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <img src={project.image} width={350} height={350} alt={project.title} className='mb-6 rounded'/>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold flex flex-row gap-4'>{project.title} 
                            <a href={project.link} target="_blank" ><FaExternalLinkAlt /></a>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,id) => (
                            <span key={id} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
