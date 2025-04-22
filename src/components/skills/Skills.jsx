import skills from './constants.js';

const Skills = () => {
  return (
    <section
      className="flex flex-col text-center items-center mx-4 mb-20"
      id="skills">
      <h2 className="mb-2">Skills and Tools</h2>
      <ul className="flex flex-wrap justify-center gap-7 xl:gap-10 max-w-screen-xl">
        {skills.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center justify-center group">
            <div
              className="fill-[#e43d12] hover:fill-[#efb11d] transition-colors duration-200 hover:rotate-180 transform transition-transform duration-300 cursor-pointer"
              dangerouslySetInnerHTML={{ __html: item.svg }}
            />
            <span className="mt-2 text-center text-sm text-[#e43d12] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
