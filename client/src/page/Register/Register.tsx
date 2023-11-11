import React from 'react';
import { useState } from 'react';
import { autoLogin, createUser, getUserId, verifyUser } from '../../api/UserApi';
import { createUserProfile } from '../../api/profileApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { create } from 'domain';
import { createDashboardData } from '../../api/DashboardApi';
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
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        console.error('jwt is null');
        return;
      }
      const userId = await getUserId(jwt);
      await createDashboardData(jwt,userId.userId);
      navigate('/content');
    } catch (error) {
      console.error('error', error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full space-y-8">
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create your account
            </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* Surname Input */}
                <div>
                    <label htmlFor="surname" className="sr-only">Surname</label>
                    <input 
                        id="surname" 
                        name="surname" 
                        type="text" 
                        required 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Register
                </button>
            </div>
        </form>
    </div>
</div>
  );
}
