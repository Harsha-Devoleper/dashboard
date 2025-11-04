import React from 'react'

const SideBar = ({handleShowAddFirm, handleShowAddProduct}) => {
  return (
    <div className="sideBarSection">
        <ul>
            <li onClick={handleShowAddFirm}>Add Firm</li>
            <li onClick={handleShowAddProduct}>Add Product</li>
            <li>Add Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar