import React from 'react'

const NavBar = ({handleShowLogin, handleShowRegister, showLogOut, handleLogOut}) => {
  const firmName = localStorage.getItem('firmName');
  return (
    <div className="navSection">
        <div className="company">
            Vendor Dashboard
        </div>
        <div>
          <p>{firmName}</p>
        </div>
        <div className="userAuth">

          {!showLogOut ? (
            <>
              <span onClick={handleShowLogin}>Login</span>
              <span onClick={handleShowRegister}>Register</span>
            </>
          ) : (
              <span onClick={handleLogOut}>Logout</span>
          )}
        </div>
    </div>
  )
}

export default NavBar