import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Waves from "./assets/waves.mp4";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <Navbar
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        <Routes>
          <Route exact path="/" element={<ProjectCard />} />
          <Route
            exact
            path="/about"
            element={<About setContactSelected={setContactSelected} />}
          />
        </Routes>
        {contactSelected ? (
          <>
            <ContactForm setContactSelected={setContactSelected} />
          </>
        ) : (
          <></>
        )}
      </main>
      <Footer />
      <video
        className="bg-video"
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
          zIndex: "-1",
        }}
      >
        <source src={Waves} type="video/mp4" />
      </video>
    </Router>
  );
}

export default App;
