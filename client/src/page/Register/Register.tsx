import React from "react";
import { useState } from "react";
import { createUser } from "../../api/UserApi";
import "./Register.css";
export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name,
      surname,
      email,
      password,
    };
    createUser(data);
  };
  return (
    <div id="bgall">
      <div id="p-container">
        <div id="p-content">
          <div id="login-image">
            <div id="pinkholder"></div>
          </div>
        </div>
        <div id="testbox2">
        <div id="logo2"></div>

        <div id="sp-form">
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="name" id="email_input "></label>
                <input
                  id="input_border2"
                  type="text"
                  name="name"

                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div id="pdz"></div>
              <div>
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
            <div id="pdz"></div>
            <div>
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
            <div id="pdz"></div>
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
            <div id="pdz"></div>
            <div className="btn-sub">
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
