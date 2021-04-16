import React, { useState } from 'react';
import { validateEmail } from '../../utils/emailValidate';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errorMessage, setErrorMessage] = useState('')

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if(e.target.name === 'email'){
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage('Your email is invalid')
      } else {
        setErrorMessage('')
      }
    } else {
      if(!e.target.value.length){
        setErrorMessage(`${e.target.name} is required`)
      } else {
        setErrorMessage('')
      }
    }
    if(!errorMessage){
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
  }
  
  return (
    <section className="contact-container">
      <h1>Let's work together!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder="email"/>
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="message"/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">send request</button>
        <a className="resume-button" target="_blank" rel="noreferrer" href="https://www.dropbox.com/scl/fi/xo3g9f47psav12fqmme70/Andrew-Tirpok-Resume-2021.docx?dl=0&rlkey=lm6mt82rp03olfum6egvtqy51">download resume</a>
      </form>
    </section>
  )
}

export default ContactForm
