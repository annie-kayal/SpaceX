import React, { useState } from 'react'
import Modal from './Modal'

const Card = ({ el }) => {

  const [modalOpen, setModal] = useState(false)
  const { name, rocket_name } = el

  return (

    <div className='card'>
      <div className="content">
        <h1> {rocket_name || name} </h1>
        <button onClick={() => setModal(true)} className='button is-small'>
          <i className="icon is-small">
            <i className="fas fa-plus"></i>
          </i>
        </button>
      </div>

      {modalOpen &&
        <Modal
          setModal={setModal}
          el={el}
        />
      }
    </div>
  )
}

export default Card