import React from 'react'

const Navbar = (props) => {
  const {
    setContactSelected
  } = props


  return (
    <header>
      <p>andrew tirpok</p> 
      <nav>
        <ul>
          <li>
            <a href="#projects">
              <span onClick={() => setContactSelected(false)}>Projects</span>
            </a>
          </li>
          <li className="mx-2">
            <a href="#about">
              <span onClick={() => setContactSelected(false)}>About</span>
            </a>
          </li>
          <li className = "mx-1">
            <a href="#contact">
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
