
import React, { useState } from 'react';
import logo from './Images/logo.jpg';
import "./css/style.css";



function Login() {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:51294/api/Login/ValidateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          LoginName: loginName,
          Password: password
        })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      if (data && data.ResponseStatus === 1) {
      } else {
        //setError(data.Message);
        localStorage.setItem('FamilyMemberId', data.Data.user[0].FamilyMemberId);
        localStorage.setItem('FamilyId', data.Data.user[0].FamilyId);
        window.location.href ="/home"
      }
    } catch (err) {
      
      setError('Failed to login. Please try again later.');
    }
  };

  return (


    <div>
    <header className="showcase">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="showcase-content">
        <div className="formm">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="info">
              <input className="email" type="text"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)} placeholder="UserName" /> <br />
              <input className="email" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit">Sign In</button>
            </div>
            <div className="help">
              <div>
                <input value="true" type="checkbox" /><label>Remember me</label>
              </div>
              <a href="#">Need Help ?</a>
            </div>
          </form>
        </div>

        <div className="fcbk">
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <p>Login with Facebook</p>
        </div>
        <div className="signup">
          <p>New ?</p>
          <a href="/register">Sign up now</a>
        </div>
        {error && <p>{error}</p>}

        <div className="more">
          <p>
            <a href="#">Learn more.</a>
          </p>
        </div>
      </div>

    
    </header>
  </div>
  );
}

export default Login;
