import React, { useState } from 'react'
import API_URL from '../../helpers/ApiPath';

const Register = ({handleShowLogin}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${API_URL}vendor/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Registration successful:', data);
            setUsername("");
            setEmail("");
            setPassword("");
            alert('Registration successful! You can now log in.');
            handleShowLogin()
        }
    } catch (error) {
        console.log('Error during registration:', error);
        alert('Registration failed. Please try again.');
    }
  }

  return (
    <div className="registerSection">
        <h2>Vendor Registration</h2>
        <form className="registerForm" onSubmit={handleChange}>
            <div>
                <label>Name:</label>
                <input type="text" id="name" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="btnSubmit">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register