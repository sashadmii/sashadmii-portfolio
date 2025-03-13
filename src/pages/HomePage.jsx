import ScrollingSkills from '../components/scrollingSkills/ScrollingSkills';
import ProjectsList from '../components/projectsList/ProjectsList';
import Contact from '../components/contact';
import Footer from '../components/footer/Footer';

export function HomePage() {
  return (
    <div>
      <section className="about">
        <article>
          <h2>Hi, I&lsquo;m Sasha</h2>
          <p>
            I&lsquo;m a Frontend Developer. I like building simple, accessible,
            pixel-perfect applications, and I love what I do.
            <br /> I started my jourey in IT as a QA Engineer. My background in
            Quality Assurance gives me a unique perspective on Front-End
            development, with a focus on both user experience and functionality.
            I like building simple-looking, creative, and fun things. I enjoy
            collaborating with teams, solving problems, and continuously
            learning to stay current with the latest trends in web development.
          </p>
        </article>
        <img src="./images/avatar.jpg" />
      </section>
      <ScrollingSkills />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
}
