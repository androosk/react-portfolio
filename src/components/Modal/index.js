import React from 'react'

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, caption, stack, role, github, deployment, index } = currentPhoto;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h3 className="modal-title">{name}</h3>
        <img src={require(`../../assets/projects/${index}.jpg`).default} alt={caption} />
        <p>{description}</p>
        <p>Stack/Dependencies: {stack}</p>
        <p>My Role: {role}</p>
        <a className="modal-button" target="_blank" href={github} rel="noreferrer">GitHub Repo</a>
        <a className="modal-button" target="_blank" href={deployment} rel="noreferrer">Deployed Application</a>
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
