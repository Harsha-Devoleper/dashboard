import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showAddFirm, setShowAddFirm] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    
    const handleShowLogin = () => {
        setShowLogin(!showLogin);
        setShowRegister(false);
        setShowAddFirm(false);
        setShowAddProduct(false);
        
    }

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(!showRegister);
        setShowAddFirm(false);
        setShowAddProduct(false);
        
    }

    const handleShowAddFirm = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowAddFirm(!showAddFirm);
        setShowAddProduct(false);
        
    }

    const handleShowAddProduct = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowAddFirm(false);
        setShowAddProduct(!showAddProduct);
       
    }

  
  return (
    <>
        <section className="landingSection">
            <NavBar handleShowLogin={handleShowLogin} handleShowRegister={handleShowRegister} />
            <div className="collectionSection">
                <SideBar handleShowAddFirm={handleShowAddFirm} handleShowAddProduct={handleShowAddProduct} />
                {showLogin && <Login />}
                {showRegister && <Register handleShowLogin={handleShowLogin} />}
                {showAddFirm && <AddFirm />}
                {showAddProduct && <AddProduct />}
               
            </div>
        </section>  
    </>
  )
}

export default LandingPage