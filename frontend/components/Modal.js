import React from 'react'

const Modal = ({ el, setModal }) => {
  
  const {
    rocket_name,
    name,
    flickr_images,
    country,
    description,
    dry_mass_kg,
    mass,
    height,
    height_w_trunk,
    wikipedia,
    diameter } = el

  return (
    <div className="modal is-active">
      < div className="modal-background" ></div >
      <div
        className="modal-content"
        onClick={() => setModal(false)}
      >
        <h1>{rocket_name || name}</h1>
        <ul>
          <li>Height: {height ? height.feet : height_w_trunk.feet}ft</li>
          <li>Diameter: {diameter.feet}ft</li>
          <li>Weight: {mass ? mass.kg : dry_mass_kg}kg</li>
        </ul>
        <img src={flickr_images[1]} alt={rocket_name || name} />
        {country && <p>Country: {country}</p>}
        <p id='description'>{description}</p>
        <button
          className='button'>
          <a href={wikipedia}>
            Click to find out more
          </a>
        </button>
      </div>
      <button
        onClick={() => setModal(false)}
        className="modal-close is-large"
        aria-label="close">
      </button>
    </div >
  )
}

export default Modal