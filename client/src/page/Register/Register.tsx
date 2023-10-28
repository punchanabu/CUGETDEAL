import React from 'react';
import { useState } from 'react';
import { createUser } from '../../api/UserApi';
import { useNavigate } from 'react-router-dom';
import { createDashboardData } from '../../api/DashboardApi';
import { getUserId } from '../../api/UserApi';
import { verifyUser } from '../../api/UserApi';
export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const data = {
        name,
        surname,
        email,
        password
      };
    
      // Create user
      const userResponse = await createUser(data);
    
      // Check if user was created successfully
      if (userResponse.ok) {
        // Login user to get token
        const loginResponse = await verifyUser({ email, password });
        const loginData = await loginResponse.json();
        const token = loginData.token;
        // set token to local storage
        localStorage.setItem('jwt', token);
        // Create dashboard data
        console.log("Token:",token);
        const userId = await getUserId(token);
        console.log(userId);
        const createResponse = await createDashboardData(token, userId);
        console.log(createResponse);
        // Navigate to login or dashboard
        navigate('/dashboard');
      }
     } catch(error) {
        // Handle error
        console.error('Failed to create user dashboard data', error);
      }
  };
  
  return (
    <main className="flex justify-center items-center h-screen bg-form font-bold">
      <form
        className="flex flex-col space-y-5 bg-pink-200 p-10 bg-white font-mono rounded-xl text-red-300 border-solid border-2 border-red-300 justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold ">ลงทะเบียน CUGETDEAL</h1>
        <div className="flex space-x-5">
          <div className="flex flex-col">
            <label htmlFor="name">ชื่อจริง</label>
            <input
              id="name"
              type="text"
              name="name"
              className="p-3 rounded-xl border-solid border-2 border-red-300 "
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname">นามสกุล</label>
            <input
              type="text"
              name="surname"
              className="p-3 rounded-xl border-solid border-2 border-red-300"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="rounded-xl w-1/2 p-3 bg-red-300 text-white text-center self-center"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
