import React from 'react'

const ContactForm = () => {
  const handleSubmit = {
    // do submitty things in here
  }
  
  return (
    <section className="contact-container">
      <h1>Let's work together!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" placeholder="name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" placeholder="email"/>
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea name="message" rows="5" placeholder="message"/>
        </div>
        <button type="submit">send request</button>
        <a className="resume-button" target="_blank" href="https://www.dropbox.com/scl/fi/xo3g9f47psav12fqmme70/Andrew-Tirpok-Resume-2021.docx?dl=0&rlkey=lm6mt82rp03olfum6egvtqy51">download resume</a>
      </form>
    </section>
  )
}

export default ContactForm
