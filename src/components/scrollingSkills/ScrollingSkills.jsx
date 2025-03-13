import skills from './constants.js';
import './scrollingSkills.css';

const ScrollingSkills = () => {
  return (
    <section className="container">
      <h2>Skills and Tools</h2>

      <ul className="skills">
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
      </ul>
    </section>
  );
};

export default ScrollingSkills;
