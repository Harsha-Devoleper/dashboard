import React from 'react'

const NavBar = ({handleShowLogin, handleShowRegister}) => {
  return (
    <div className="navSection">
        <div className="company">
            Vendor Dashboard
        </div>
        <div className="userAuth">
            <span onClick={handleShowLogin}>Login</span>
            <span onClick={handleShowRegister}>Register</span>
        </div>
    </div>
  )
}

export default NavBar