import React from 'react'
import AllJob from '../../components/dashboardComponent/AllJob';
import UserJobList from '../../components/dashboardComponent/UserJobList';
import { getDashboardData } from '../../api/DashboardApi';
import { useNavigate } from 'react-router-dom';
import './db.css'
const fakeData = [ 
  {title: 'kuay', description: 'description zawarudo tokiotomare', star: 3, status: 'doing'},
  {title: 'kuay2', description: 'description2 zawarudo tokiotomare', star: 2, status: 'done'},
  {title: 'kuay3', description: 'description3 zawarudo tokiotomare', star: 1, status: 'checking'},
  {title: 'kuay4', description: 'description4 zawarudo tokiotomare', star: 0, status: 'todo'}
]
const fakeUserJobData = [
  {title: 'sas1', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'punpunsirawit@gma.com',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas2', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas3', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas4', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
]

const DashBoard = () => {

  // state
  const [showAllJobs, setShowAllJobs] = React.useState<boolean>(true);
  const [jobData, setJobData] = React.useState<any>([]);
  const [userJobData, setUserJobData] = React.useState<any>([]);

  // helper function
  const navigate = useNavigate();
  const getJobData = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      navigate('/login') // if you don't have token you go login first krub.
      return;
    }
    const response = await getDashboardData(token);
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    const { jobData, userData } = data;
    setJobData(jobData);
    setUserJobData(userData);
  }

  // handler function
  const handleShowAllJobs = () => {
      setShowAllJobs(true);
  }
  const handleShowUserJobs = () => {
      setShowAllJobs(false);
  }

  // use effect
  React.useEffect(() => {
    // getJobData();
  },[]);


  return (
    <main className="flex flex-col items-center justify-center h-full font-mono space-y-10 custom-bg">
        <h1 className='text-6xl drop-shadow-md font-black text-white mt-14 mb-11'>Dashboard</h1>
        <section className='space-x-10 flex'>
          <button onClick={handleShowAllJobs} className='w-full bg-red-300 rounded-xl font-bold py-4 px-10 text-white text-2xl shadow-md'>Follow up Task</button>
          <button onClick = {handleShowUserJobs} className='w-full bg-white rounded-xl font-bold py-4 px-10 text-2xl text-red-400 shadow-md'>Jobs to do</button>
        </section>
        <section className='flex flex-col items-center space-y-3'>
          {showAllJobs ? <AllJob jobData = {fakeData} /> : <UserJobList userJobData = {fakeUserJobData} />}
        </section>
    </main>
  )
}

export default DashBoard