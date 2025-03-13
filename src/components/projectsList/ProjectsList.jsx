import './projectsList.css';
import projects from './constats';
import ProjectCard from '../projectCard/ProjectCard';

const ProjectsList = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="cardsList">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            skills={project.tech}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
