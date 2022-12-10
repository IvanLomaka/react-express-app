import React from 'react'
import { useParams } from 'react-router-dom'

const Ciao = () => {
    const { id } = useParams()

    return (
      <div>Ciao {id}</div>
    )
}

export default Ciao