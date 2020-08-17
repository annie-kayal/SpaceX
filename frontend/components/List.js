import React, { useState, useEffect } from 'react'
import Card from './Card'
import Axios from 'axios'

const List = ({ selectedNav }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v3/${selectedNav}`)
      .then(res => setData(res.data))
  }, [selectedNav])

  return (
    <>
      {data && data.map(el => {
        return (
          <Card
            key={el.id}
            el={el} />
        )
      })}
    </>
  )
}

export default List