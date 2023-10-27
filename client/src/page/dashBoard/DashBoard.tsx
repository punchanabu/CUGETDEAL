import React from 'react'
import AllJob from '../../components/dashboardComponent/AllJob';
import UserJobList from '../../components/dashboardComponent/UserJobList';

const fakeData = [ 
  {title: 'kuay', description: 'description', star: 3, status: 'doing'},
  {title: 'kuay2', description: 'description2', star: 2, status: 'done'},
  {title: 'kuay3', description: 'description3', star: 1, status: 'checking'},
  {title: 'kuay4', description: 'description4', star: 0, status: 'todo'}
]
const fakeUserJobData = [
  {title: 'sas1', description: 'description', star : 3, contact: {phone: '123456789', email: 'punpunsirawit@gma.com',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas2', description: 'description', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas3', description: 'description', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
  {title: 'sas4', description: 'description', star : 3, contact: {phone: '123456789', email: 'cddadad',instagram: '', twitter: 'twitter.com'}},
]



const DashBoard = () => {

  const [showAllJobs, setShowAllJobs] = React.useState<boolean>(true);
  
  const handleShowAllJobs = () => {
      setShowAllJobs(true);
  }
  const handleShowUserJobs = () => {
      setShowAllJobs(false);
  }

  return (
    <main className='flex flex-col items-center justify-center'>
        <h1>สรุปงาน</h1>
        <section className='space-x-10'>
          <button onClick={handleShowAllJobs}>ติดตามงาน</button>
          <button onClick = {handleShowUserJobs}>งานที่ต้องทำ</button>
        </section>
        {showAllJobs ? <AllJob jobData = {fakeData} /> : <UserJobList userJobData = {fakeUserJobData} />}
    </main>
  )
}

export default DashBoard