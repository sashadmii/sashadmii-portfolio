import './projectCard.css';

const ProjectCard = ({ name, image, skills }) => {
  return (
    <section className="card">
      <h3>{name}</h3>
      <img src={image} />
      <div className="skillContainer">
        {skills.map((skill) => (
          <span key={skill} className="techSkill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
