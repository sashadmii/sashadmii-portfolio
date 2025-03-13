import './contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Ready to start? Let&rsquo;s talk</h2>

      <h3>Oleksandra Rychka</h3>
      <div className="contactIcons">
        <a href="https://github.com/sashadmii" target="_blank">
          <img src="../../../public/images/icons/contacts/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/oleksandrarychka/" target="_blank">
          <img src="../../../public/images/icons/contacts/linkedin.svg" />
        </a>
        <a href="https://t.me/sasha_dmii" target="_blank">
          <img src="../../../public/images/icons/contacts/telegram.svg" />
        </a>
        <a href="mailto:alexandra.rychka@gmail.com" target="_blank">
          <img src="../../../public/images/icons/contacts/gmail.svg" />
        </a>
      </div>
    </section>
  );
};
export default Contact;
