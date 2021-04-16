import React from 'react'

const Navbar = () => {
  return (
    <header>
      <p>andrew tirpok</p> 
      <nav>
        <ul>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a href="#about">
              About
            </a>
          </li>
          <li className = "mx-1">
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
