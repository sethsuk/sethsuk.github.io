import React from 'react';

const Projects = ({ project_map }) => {
    return (
        <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
            {Array.from(project_map.entries()).map(([name, details], index) => (
                <div key={index} className="project-card">
                    <h3>{name}</h3>
                    <p>{details.description}</p>
                    <p><strong>Technologies:</strong> {details.technologies.join(', ')}</p>
                    <a href={details.link} target="_blank" rel="noopener noreferrer">{details.link_label}</a>
                </div>
            ))}
        </div>
        </section>
    );
  };
  

export default Projects;