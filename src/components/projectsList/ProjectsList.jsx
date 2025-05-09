import projects from './constats';
import ProjectCard from '../projectCard/ProjectCard';

const ProjectsList = () => {
  return (
    <section
      className="grid place-items-center mx-4 sm:mx-8 lg:mx-16 xl:mx-24 mb-20"
      id="projects">
      <h2 className="mb-2">Projects</h2>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-5 md:gap-11 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            skills={project.tech}
            link={project.link}
            github={project.github}
            description={project.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
