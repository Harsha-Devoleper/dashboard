import React, {useState} from 'react'
import API_URL from '../../helpers/ApiPath';

const Login = ({ handleShowWelcome }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}vendor/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Handle successful login (e.g., redirect or show a success message)
        alert('Login successful!');
        setEmail("");
        setPassword("");
        localStorage.setItem('vendorToken', data.token);
        handleShowWelcome();
      }
      const vendorId = data.vendorId;
      console.log('Vendor ID:', vendorId);
      const vendorResponse = await fetch(`${API_URL}vendor/single-vendor/${vendorId}`)
      window.location.reload();
      const vendorData = await vendorResponse.json();

      if (vendorResponse.ok) {
        const vendorFirmId = vendorData.vendorFirmId;
        const vendorFirmName = vendorData.vendor.firm[0].firmName;
        localStorage.setItem('firmmId', vendorFirmId);
        localStorage.setItem('firmName', vendorFirmName);
       
      }


      
    
    } catch (error) {
      console.log('Error during login:', error);
      // Handle login error (e.g., show an error message)
        alert('Login failed. Please try again.');
    }
  }

  return (
    <div className="loginSection">
        <h2>Vendor Login</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" id="email" name="email" onChange = {(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id="password" name="password" onChange = {(e) => setPassword(e.target.value)} required />
            </div>
            <div className = "btnSubmit">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login