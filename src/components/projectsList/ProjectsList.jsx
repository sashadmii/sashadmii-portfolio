import projects from './constats';
import ProjectCard from '../projectCard/ProjectCard';

const ProjectsList = () => {
  return (
    <section
      className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-16 xl:mx-24 my-12"
      id="projects">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Projects</h2>
      <ul className="flex gap-x-11 justify-center items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            skills={project.tech}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
