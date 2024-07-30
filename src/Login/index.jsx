import React, { useState } from 'react';
import '../Login/index.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? 'https://auth-rg69.onrender.com/api/auth/signup' 
      : 'https://auth-rg69.onrender.com/api/auth/signin';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert('True');
    } else {
      alert(`False: ${data.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
     <label htmlFor="username">Username:</label>
     <input type="text" id='username'  value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div  className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Tizimga kirish' : 'Royxatdan otish'}
      </button>
    </div>
  );
};

export default Login;
