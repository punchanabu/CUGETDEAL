import React, { useState } from 'react';
import { verifyUser } from '../../api/UserApi';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
          email,
          password
    };
    try {
      const response = await verifyUser(data);
      if (!response.ok) {
        console.log('error', 'Invalid email or password');
      }
      // set Jwt to local storage
      const jwt = await response.json();
      localStorage.setItem('jwt', jwt);
      navigate('/content');
    } catch (error) {
      console.error('error', error);
    }
  };

  return (

    <div id ="bgall">
      <div id = "p-container">   
          <div id = "p-content">
              <div id = "login-image">
                  <div id = "pinkholder">

                  </div>
              </div>
          </div>
      <div id = "testbox">

      <div id = "logo"></div>
      <div id = "pdz"></div>
      <div id = "sp-form">
    <form onSubmit={handleSubmit}>
      <label id = "email_input">
        <input
          type="email"
          placeholder="Email"
          id = "input_border"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <div id = "pdz"></div>
      <label id =  "password_input">

        <input
          type="password"
          placeholder="Password"
          id = "input_border"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <div id = "pdz"></div>



    <div className="btn-sub">
      <button type= "submit" id = "subbtn">
      <span>Submit</span>
      </button>
      </div>



    </form>
    </div>
      </div>
      </div>
    </div>
  );
}
