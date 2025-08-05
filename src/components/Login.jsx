import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import axios from 'axios';

const Login = () => {



  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("")

  const handleChange=(event)=>{
    setEmail(event.target.value);
    
  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  console.log(password);

  const handleLogin=async()=>{
      const response= await axios.post("http://localhost:8000/user/login",{
        email,
        password
      });

      console.log(response.data);
  } 

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
        <input
          id="email"
          placeholder="Email"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}

          onChange={handlePasswordChange}
          value={password}
        />

        <button
          style={{
            padding: '10px',
            backgroundColor: '#007BFF',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}

          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
