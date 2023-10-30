import React from 'react';
import { useState } from 'react';
import { autoLogin, createUser, verifyUser } from '../../api/UserApi';
import { createUserProfile } from '../../api/profileApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { create } from 'domain';
import "./Register.css";
export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      name,
      surname,
      email,
      password,
    };
    createUser(data)
    try {
      const response = await createUser(data);
  
      if (!response.ok) {
        console.error('Registration failed');
        return;
      }
      // auto login
      await autoLogin({ email, password });
      await createUserProfile(data);
      navigate('/content');
    } catch (error) {
      console.error('error', error);
    }
  };
  return (
    <div id="bgallz">
      <div id="p-container">
        <div id="p-content">
          <div id="login-image">
            <div id="pinkholder"></div>
          </div>
        </div>
        <div id="testbox2">
        <div id="logo2"></div>

        <div id="sp-form2" className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div id = "form-box">
                <label htmlFor="name" id="email_input "></label>
                <input
                  id="input_border2"
                  type="text"
                  name="name"
                  className="flex"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div id="pdz"  className="flex flex-col"></div>
              <div  className="flex flex-col">
                <label htmlFor="surname" id="email_input"></label>
                <input
                  type="text"
                  name="surname"
                  id="input_border2"
                  placeholder="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                />
              </div>
            </div>
            <div id="pdz"  className="flex flex-col"></div>
            <div  className="flex flex-col">
              <label htmlFor="email" id="email_input"></label>
              <input
                type="email"
                name="email"
                id="input_border2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div id="pdz"  className="flex flex-col"></div>
            <div>
              <label htmlFor="password" id="email_input"></label>
              <input
                type="password"
                name="password"
                id="input_border2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div id="pdz"  className="flex flex-col"></div>
            <div className="btn-sub2 flex flex-col">
                <button type="submit" id="subbtn">
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
