import React, {useState, useEffect, use} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import AllProducts from '../components/AllProducts'
import Welcome from '../components/welcome'

const LandingPage = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showAddFirm, setShowAddFirm] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false);
    const [showFirmTitle, setShowFirmTitle] = useState(true);

    useEffect(() => {
        const loginToken = localStorage.getItem('vendorToken');
        if (loginToken) {
            setShowLogOut(true);
            setShowWelcome(true);
        };
    }, []);

    useEffect(() => {
        const firmName = localStorage.getItem('firmName');
        const firmmId = localStorage.getItem('firmmId');
        if (firmName || firmmId) {
            setShowFirmTitle(false);
            setShowWelcome(true);
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem('vendorToken');
        localStorage.removeItem('firmmId');
        localStorage.removeItem('firmName');
        setShowLogOut(false);
        alert('Logged out successfully');
        setShowFirmTitle(true);
        setShowWelcome(false);

    }

    const handleShowWelcome = () => {
        setShowWelcome(!showWelcome);
        setShowLogin(false);
        setShowRegister(false);
        setShowAddFirm(false);
        setShowAddProduct(false);
        setShowAllProducts(false);
    }

    const handleShowLogin = () => {
        setShowLogin(!showLogin);
        setShowRegister(false);
        setShowAddFirm(false);
        setShowAddProduct(false);
        setShowAllProducts(false);
        setShowWelcome(false);
        
    }

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(!showRegister);
        setShowAddFirm(false);
        setShowAddProduct(false);
        setShowAllProducts(false);
        setShowWelcome(false);
        
    }

    const handleShowAddFirm = () => {
        if (showLogOut) {
        setShowLogin(false);
        setShowRegister(false);
        setShowAddFirm(!showAddFirm);
        setShowAddProduct(false);
        setShowAllProducts(false);
        setShowWelcome(false);
        } else {
            alert('Please login to add a firm');
            setShowLogin(true);
        }
        
    }

    const handleShowAddProduct = () => {
        if (showLogOut) {
            setShowLogin(false);
            setShowRegister(false);
            setShowAddFirm(false);
            setShowAddProduct(!showAddProduct);
            setShowAllProducts(false);
            setShowWelcome(false);
        } else {
            alert('Please login to add a product');
            setShowLogin(true);
        }
    }

    const handleShowAllProducts = () => {
        if (showLogOut) {
            setShowLogin(false);
            setShowRegister(false);
            setShowAddFirm(false);
            setShowAddProduct(false);
            setShowAllProducts(!showAllProducts);
            setShowWelcome(false);
        } else {
            alert('Please login to view all products');
            setShowLogin(true);
        }
    }

    
    return (
        <>
            <section className="landingSection">
            <NavBar handleShowLogin={handleShowLogin} handleShowRegister={handleShowRegister} showLogOut={showLogOut} handleLogOut={handleLogOut} />
            <div className="collectionSection">
                <SideBar handleShowAddFirm={handleShowAddFirm} handleShowAddProduct={handleShowAddProduct} handleShowAllProducts={handleShowAllProducts} showFirmTitle={showFirmTitle} />
                {showLogin && <Login handleShowWelcome={handleShowWelcome} />}
                {showRegister && <Register handleShowLogin={handleShowLogin} />}
                {showAddFirm && showLogOut && <AddFirm />}
                {showAddProduct && showLogOut && <AddProduct />}
                {showAllProducts && showLogOut && <AllProducts />}
                {showWelcome && <Welcome />}
               
            </div>
        </section>  
    </>
  )
}

export default LandingPage