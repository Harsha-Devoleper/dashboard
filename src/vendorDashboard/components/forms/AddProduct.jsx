import React, {useState} from 'react'
import API_URL from '../../helpers/ApiPath';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState([]);
  const [bestSeller, setBestSeller] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleBestSeller = (event) => {
    const value = event.target.value === "true";
    setBestSeller(value);
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setFile(selectedImage);
  }


  const handleAddProduct = async(e) => {
    e.preventDefault();

    try {
      const loginToken = localStorage.getItem('vendorToken');
      const firmId = localStorage.getItem('firmmId');
      if (!loginToken || !firmId) {
        console.error('No login token or firm ID found');
      }
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('price', price);
      formData.append('bestSeller', bestSeller);
      formData.append('description', description);
      formData.append('productImage', file);

      category.forEach((value) => {
        formData.append('category', value);
      });

      const response = await fetch(`${API_URL}product/add-product/${firmId}`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
        alert('Product added successfully');
        setProductName('');
        setPrice('');
        setCategory([]);
        setBestSeller('');
        setDescription('');
        setFile(null);
      } else {
        console.log('Failed to add product', response.statusText);
      }
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  return (
    <div className="productSection">
        <form className="tableForm" onSubmit={handleAddProduct}>
            <label>Product Name:</label><br />
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /><br/>
            <label>Price:</label><br />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br/>
            <label>Category:</label><br />
            <label>Veg</label>
            <input type="checkbox" value = "veg" checked={category.includes("veg")} onChange={handleCategoryChange}/><br/>
            <label>Non-Veg</label>
            <input type="checkbox" value = "non-veg" checked={category.includes("non-veg")} onChange={handleCategoryChange}/><br/>
            <label>Best Seller:</label><br />
            <label>Yes</label>
            <input type="radio" value="true" checked={bestSeller === true} onChange={handleBestSeller}/><br/>
            <label>No</label>
            <input type="radio" value="false" checked={bestSeller === false} onChange={handleBestSeller}/><br/>
            <label>Description:</label><br />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
            <label>Product Image</label>
            <input type="file" onChange={handleImageUpload}/>
            <div className="btnSubmit">
                <button type="submit">Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct