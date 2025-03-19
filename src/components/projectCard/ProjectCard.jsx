const ProjectCard = ({ name, image, skills, link, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex flex-col w-[30%] min-h-[37rem] border border-[#e43d12] rounded-2xl items-center 
  p-[2rem] gap-[2rem] hover:!bg-[#e43d12] hover:!text-[#ebe9e1]">
      <h3>{name}</h3>
      <img src={image} className="self-center w-[98%] rounded-2xl" />
      <p className="text-xs">{description}</p>
      <div className="flex justify-center flex-wrap gap-[1rem]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[#ebe9e1] bg-[#e43d12] rounded-lg px-[0.5rem] py-[0.7rem] border border-transparent group-hover:border-[#ebe9e1]">
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
