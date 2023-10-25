import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Register from '../src/components/User/Register';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

function App() {
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
}

export default App;
