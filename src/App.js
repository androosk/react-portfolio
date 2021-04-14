import React from 'react';
import Navbar from './components/Navbar';
import Waves from './assets/waves.mp4'

function App() {
  return (
    <div>
      <Navbar />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
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
