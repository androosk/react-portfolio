import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Waves from './assets/waves.mp4'
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm'

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Navbar
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <ProjectCard />
      {contactSelected ? (
      <>
        <ContactForm 
          setContactSelected={setContactSelected}
        />
      </>) : (
        <>
        </>
      )}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "20%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src={Waves} type="video/mp4" />
      </video>

    </div>    
  );
}

export default App;
