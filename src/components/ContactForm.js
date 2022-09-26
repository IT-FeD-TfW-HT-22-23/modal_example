import "../styles/buttons.css";
import "../styles/contactform.css";

const ContactForm = () => {
  return (
    <>
      <h1 className="contact-title">Wanna Talk?</h1>
      <p className="contact-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <form className="contact-form">
        <div className="form-control">
          <label htmlFor="name">Namn:</label>
          <input placeholder="Namn" className="form-input" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-post:</label>
          <input placeholder="E-post" className="form-input" />
        </div>

        <div className="form-control">
          <p>Meddelande:</p>
          <textarea
            placeholder="Skriv ditt meddelande här"
            rows={9}
            className="message"
          />
        </div>
      </form>
      <button type="submit" className="btn">
        Skicka Meddelande
      </button>
    </>
  );
};

export default ContactForm;
