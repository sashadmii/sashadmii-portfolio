import skills from './constants.js';

const Skills = () => {
  return (
    <section className="flex flex-col items-center mb-20" id="skills">
      <h2>Skills and Tools</h2>
      <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-7">
        {skills.map((item) => (
          <li
            key={item.name}
            className="w-auto flex flex-col items-center justify-center group" // Added 'group' here
          >
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

{
  /* <h2>Skills and Tools</h2>

<ul className="flex gap-10">
  {skills.map((item) => (
    <li key={item} className="skill">
      <div>
        <img
          src={`./images/icons/${item
            .replace(/[^a-zA-Z]/g, '')
            .toLowerCase()}.svg`}
          alt={item}
        />
      </div>
    </li>
  ))}
</ul> */
}
