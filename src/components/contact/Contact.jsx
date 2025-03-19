import contactIcons from './constants';

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center px-6 sm:px-12 md:px-20 lg:mx-[10rem] xl:mx-[20rem] my-10 text-center"
      id="contact">
      <h2 className="mb-4 text-lg sm:text-xl md:text-2xl">
        Ready to start? Let&rsquo;s talk
      </h2>

      <h3 className="mb-4 text-base sm:text-lg md:text-xl">
        Oleksandra Rychka
      </h3>
      <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8">
        {contactIcons.map((icon) => (
          <a
            key={icon.name}
            target="_blank"
            href={icon.link}
            className="transition-transform duration-200 hover:scale-125">
            <img
              src={`./images/icons/contacts/${icon.name}.svg `}
              className="w-8 sm:w-10 md:w-12"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contact;
