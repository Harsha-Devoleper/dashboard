import React, {useState, useEffect} from 'react'
import API_URL from '../helpers/ApiPath';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const productsHandler = async() => {
        const firmId = localStorage.getItem('firmmId');
        try {
            const response = await fetch(`${API_URL}product/${firmId}/products`);
            const newProductsData = await response.json();
            setProducts(newProductsData.products);
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        productsHandler();
    }, []);

    const handleDeleteProduct = async (productId) => {
        const firmId = localStorage.getItem('firmmId');
        try {
            const response = await fetch(`${API_URL}product/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setProducts(products.filter(product => product._id !== productId));
                confirm("Are you sure you want to delete this product?");
                alert('Product deleted successfully');
            } else {
                console.error('Error deleting product:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('An error occurred while deleting the product.');
        }
    }

    return (
        <div>
            <h2>All Products</h2>
            {!products ? (
                <p>No products available.</p>
            ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img src={`${API_URL}uploads/${product.image}/`} alt={product.productName} />
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default AllProducts