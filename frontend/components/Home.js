import React, { useState, useRef } from 'react'
import List from './List'

const Home = (props) => {

  const [selectedNav, setNav] = useState()
  const list = useRef()
  const prompt = useRef()

  function createNav(e) {
    e.preventDefault()
    list.current.style.animation = 'grow linear forwards 1.5s'
    prompt.current.style.animation = 'fade linear forwards 1.5s'
    setNav(e.target.innerHTML.toLowerCase())
  }

  return (
    <main>
      <section className="home">
        <img src="https://www.nutonian.com/img/logo-spacex-gray.png" alt="SpaceX" />
        <h3 ref={prompt}>Click The Buttons Below To Explore</h3>
        <div className="navigation">
          <button onClick={(e) => createNav(e)} className="button is-medium">ROCKETS</button>
          <button onClick={(e) => createNav(e)} className="button is-medium">DRAGONS</button>
        </div>
        <div ref={list} className='list-container'>
          {selectedNav &&
            <List
              props={props}
              selectedNav={selectedNav && selectedNav}
            />
          }
        </div>
      </section>
    </main>
  )
}

export default Home