import React from 'react'

const SideBar = ({handleShowAddFirm, handleShowAddProduct, handleShowAllProducts, showFirmTitle}) => {
  return (
    <div className="sideBarSection">
        <ul>
            {showFirmTitle ? <li onClick={handleShowAddFirm}>Add Firm</li>: ""}
            <li onClick={handleShowAddProduct}>Add Product</li>
            <li onClick={handleShowAllProducts}>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar