import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <Link to="/">Go to Home</Link>
        <h1>Page not FOUND</h1>
    </div>
  )
}

export default NotFound