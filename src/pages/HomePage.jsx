import Skills from '../components/skills';
import ProjectsList from '../components/projectsList';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <section
        className="flex flex-col lg:flex-row justify-center items-center mx-4 lg:mx-72 my-20 gap-10"
        id="about">
        <article className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Hi, I&lsquo;m Sasha
          </h2>
          <p className="text-sm sm:text-base mb-4">
            I&lsquo;m a Frontend Developer specializing in JavaScript,
            TypeScript, and React. I like building simple, accessible,
            pixel-perfect applications, and I love what I do.{' '}
          </p>
          <p className="text-sm sm:text-base mb-4">
            I started my journey in IT as a QA Engineer. As the sole QA on the
            team, I gained experience in all stages of the software testing
            process. I liked diving into the code to find the root cause of a
            particular bug, that&lsquo;s how I discovered my passion for coding.
            Now, my background in Quality Assurance gives me a unique
            perspective on Front-end development, allowing me to focus on both
            user experience and functionality.{' '}
          </p>
          <p className="text-sm sm:text-base mb-4">
            I like building simple-looking, creative, and fun things. I enjoy
            collaborating with teams, solving problems, and continuously
            learning to stay current with the latest trends in web development.
          </p>
        </article>
        <img
          src="./images/avatar.jpg"
          className="rounded-3xl w-40 sm:w-48 md:w-64 lg:w-xs"
          alt="Avatar"
        />
      </section>
      <Skills />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
}
