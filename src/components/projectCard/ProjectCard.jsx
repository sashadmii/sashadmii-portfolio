const ProjectCard = ({ name, image, skills, link, description, github }) => {
  return (
    <div className="border border-[#e43d12] rounded-2xl p-8 flex flex-col h-full">
      <div className="flex flex-col gap-4 flex-grow">
        <h3 className="text-center">{name}</h3>
        <img src={image} className="self-center w-full rounded-2xl" />
        <p className="text-xs">{description}</p>
        <div className="flex justify-center flex-wrap gap-2 md:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[#ebe9e1] bg-[#e43d12] rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-base 
              border border-transparent">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-16">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[#ebe9e1] bg-[#e43d12] rounded-xl transition-all 
            border border-transparent hover:bg-[#ebe9e1] hover:text-[#e43d12] hover:border-[#e43d12]">
            Live
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[#e43d12] rounded-xl text-[#e43d12] hover:bg-[#e43d12] hover:text-[#ebe9e1] transition-all">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
