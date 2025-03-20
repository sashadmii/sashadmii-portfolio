const About = () => {
  return (
    <section
      className="flex flex-col xl:flex-row justify-center items-center mx-4 xl:mx-50 2xl:mx-65 my-20 gap-10"
      id="about">
      <img
        src="./images/avatar.jpg"
        className="rounded-3xl w-80 h-fit sm:w-88 md:w-104 lg:w-120 xl:w-sm"
        alt="Avatar"
      />
      <article className="text-center xl:text-left">
        <h2>Hi, I&lsquo;m Sasha</h2>
        <p className="text-left text-sm sm:text-base mb-4">
          I&lsquo;m a Frontend Developer specializing in JavaScript, TypeScript,
          and React. I like building simple, accessible, pixel-perfect
          applications, and I love what I do.{' '}
        </p>
        <p className="text-left text-sm sm:text-base mb-4">
          I started my journey in IT as a QA Engineer. As the sole QA on the
          team, I gained experience in all stages of the software testing
          process. I liked diving into the code to find the root cause of a
          particular bug, that&lsquo;s how I discovered my passion for coding.
          Now, my background in Quality Assurance gives me a unique perspective
          on Front-end development, allowing me to focus on both user experience
          and functionality.{' '}
        </p>
        <p className="text-left text-sm sm:text-base mb-4">
          I like building simple-looking, creative, and fun things. I enjoy
          collaborating with teams, solving problems, and continuously learning
          to stay current with the latest trends in web development.
        </p>
      </article>
    </section>
  );
};

export default About;
