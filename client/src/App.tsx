import React from 'react';
import './App.css';
import Root from './Root';
import Register from './page/Register/Register';
import { createBrowserRouter, createRoutesFromElements, Link, RouterProvider, Route } from 'react-router-dom';
import Login from './page/Login/Login';
import DashBoard from './page/DashBoard/DashBoard';
import MainContent from './page/Main/main'
import JobDetail from './page/JobDetail/JobDetail';
import CreateJob from './page/createJob/createJob';
import Reward from './page/Reward/Reward';
import Home from './page/Home/Home';
import Profiel from './page/Profile/Profile';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element = {<Root/>}>
    <Route index element = {<Home/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/register' element = {<Register/>}/>
    <Route path = '/dashboard' element = {<DashBoard/>}/>
    <Route path = '/content' element = {<MainContent/>}/>
      <Route path = '/content/:id' element = {<JobDetail/>}/>
    <Route/>
    <Route path = '/createjob' element = {<CreateJob/>}/>
    <Route path = '/reward' element = {<Reward/>}/>
    <Route path = '/profile' element = {<Profile/>}/>
  </Route>
));


function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

function App() {
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
}

export default App;
