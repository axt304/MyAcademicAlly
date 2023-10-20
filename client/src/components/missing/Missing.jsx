import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <>
      <main>
        <h2>404 Not Found.</h2>
        <h3>
          <Link to='/' onClick={() => {if (window.scrollY !== 0) window.scrollTo(0,0)}}>Return to Home</Link>
        </h3>
      </main>
    </>
  )
}

export default Missing