import React from 'react'
import AllJob from '../../components/dashboardComponent/AllJob';
import UserJobList from '../../components/dashboardComponent/UserJobList';
import { getDashboardData } from '../../api/DashboardApi';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../api/UserApi';
// const fakeData = [ 
//   {title: 'kuay', description: 'description zawarudo tokiotomare', star: 3, status: 'doing'},
//   {title: 'kuay2', description: 'description2 zawarudo tokiotomare', star: 2, status: 'done'},
//   {title: 'kuay3', description: 'description3 zawarudo tokiotomare', star: 1, status: 'checking'},
//   {title: 'kuay4', description: 'description4 zawarudo tokiotomare', star: 0, status: 'todo'}
// ]
// const fakeUserJobData = [
//   {title: 'sas1', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'punpunsirawit@gma.com',instagram: '', twitter: 'twitter.com'}},
//   {title: 'sas2', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
//   {title: 'sas3', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
//   {title: 'sas4', description: 'description zawarudo tokiotomare', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
// ]

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
    const userId = await getUserId(token);
    const response = await getDashboardData(token, userId);
    const data = await response;
    console.log("yay:", data);
    const dashboardRes = data.dashboard;
    // console.log(dashboardRes);
    console.log(dashboardRes.JobAssign);
    console.log(dashboardRes.UserJob);
    const { JobAssign, UserJob } = dashboardRes;
    setJobData(JobAssign);
    setUserJobData(UserJob);
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
    getJobData();
  },[]);


  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>Dashboard</h1>
      <div className='flex justify-center space-x-4 mb-6'>
          <button onClick={handleShowAllJobs} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${showAllJobs ? '' : 'opacity-70'}`}>Follow up Task</button>
          <button onClick={handleShowUserJobs} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${showAllJobs ? 'opacity-70' : ''}`}>Jobs to do</button>
      </div>
      <div>
          {showAllJobs ? <AllJob jobData={jobData} /> : <UserJobList userJobData={userJobData} />}
      </div>
    </main>
  )
}

export default DashBoard