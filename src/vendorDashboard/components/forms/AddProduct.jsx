import React from 'react'

const AddProduct = () => {
  return (
    <div className="productSection">
        <form className="tableForm">
            <label>Product Name:</label><br />
            <input type="text"/><br/>
            <label>Price:</label><br />
            <input type="text"/><br/>
            <label>Category:</label><br />
            <label>Veg</label>
            <input type="checkbox" value = "Veg"/><br/>
            <label>Non-Veg</label>
            <input type="checkbox" value = "Non-Veg"/><br/>
            <label>Best Seller:</label><br />
            <label>Yes</label>
            <input type="checkbox" value = "Yes"/><br/>
            <label>No</label>
            <input type="checkbox" value = "No"/><br/>
            <label>Description:</label><br />
            <input type="text"/><br/>
            <label>Product Image</label>
            <input type="file"/>
            <div className="btnSubmit">
                <button type="submit">Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct