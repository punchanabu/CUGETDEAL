import React from 'react';
import './App.css';
import Root from './Root';
import Navbar from './components/Navbar';
import Register from './page/Register/Register';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Login from './page/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login/>
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
