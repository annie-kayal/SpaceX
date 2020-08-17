import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import 'bulma'
import './css/main.scss'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))