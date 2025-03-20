const ProjectCard = ({ name, image, skills, link, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group border border-[#e43d12] rounded-2xl p-8 gap-8 flex flex-col h-full 
      hover:!bg-[#e43d12] hover:!text-[#ebe9e1] transition-all">
      <h3 className="text-center">{name}</h3>
      <img src={image} className="self-center w-full rounded-2xl" />
      <p className="text-xs">{description}</p>
      <div className="flex justify-center flex-wrap gap-2 md:gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[#ebe9e1] bg-[#e43d12] rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-base 
            border border-transparent group-hover:border-[#ebe9e1] transition-all">
            {skill}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
