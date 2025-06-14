
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function FacultyLogin() {
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!email || !password) {
          setError('Please fill in all fields');
          return;
        }
        
        // Here you would normally call your authentication API
        console.log('Login attempt with:', { email, password });
        
        // For demo purposes - just show success
        alert('Login successful (demo)');
        setError('');
      };
  return (
    <div>
       <div className="container d-flex justify-content-center align-items-center mt-10 " >
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Faculty Login</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
         <a href="/FacultyHome"><button type="submit" className="btn btn-primary w-100 mb-3">Login</button></a> 
          
         
          
          <div className="text-center">
            <span className="text-muted">New User? </span>
            <Link to="/Registration/FacultyRegistration" className="text-decoration-none">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default FacultyLogin
