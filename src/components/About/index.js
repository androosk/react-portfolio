import React from 'react'
import Me from '../../assets/me.jpg';

const About = (props) => {
  const { setContactSelected } = props;

  return (
    <section className="about-container">
      <div>
        <p>Hi, my name is Andrew Tirpok, and I'm a software engineer and web developer. I have a passion for designing and building functional, beautiful things.</p>
        <p>Originally from the East Coast, I moved to Utah in 2019 for the mountains and the thriving tech industry.</p>
        <p>When I'm not out hiking or skiing, I can generally be found sitting in front of my computer, working hard on building some new project!</p>
        <p>My tech stack includes:</p>
        <ul className="stack-list">
          <li>HTML5, CSS and JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL/NoSQL</li>
          <li>jQuery</li>
          <li>Version Control (GIT)</li>
        </ul>
        <p>Education:</p>
        <ul>
          <li>Rutgers University - Master's in Communication and Information Studies</li>
          <li>Franklin Pierce University - BA Mass Communication, Minor in Graphic Design</li>
        </ul>
        <button onClick={() => setContactSelected(true)}>Let's work together!</button>
      </div>
      <div>
        <img src={Me} className="selfie" alt="selfie" />
      </div>
    </section>
  )
}

export default About
