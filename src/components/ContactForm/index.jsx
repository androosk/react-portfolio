import React, { useState } from "react";
import { validateEmail } from "../../utils/emailValidate";

const ContactForm = props => {
  const { setContactSelected } = props;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleChange = e => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setContactSelected(false)
  // }

  return (
    <section className="contact-container">
      <div className="contact-header">
        <div>
          <h2>Let's work together!</h2>
        </div>
        <button
          className="close-button"
          onClick={() => setContactSelected(false)}
        >
          X
        </button>
      </div>
      <form
        name="contact"
        method="POST"
        onSubmit="submit"
        action="/success"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
            placeholder="message"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="request-button">
          send request
        </button>
        <a
          className="resume-button"
          target="_blank"
          rel="noreferrer"
          href="https://www.dropbox.com/scl/fi/jdo0li8t63217t5ux3pir/Andrew-Tirpok-Resume.pdf?rlkey=2382pqvoifnr84whl9fnad84i&st=jky0kkyu&dl=0"
        >
          download resume
        </a>
      </form>
    </section>
  );
};

export default ContactForm;
