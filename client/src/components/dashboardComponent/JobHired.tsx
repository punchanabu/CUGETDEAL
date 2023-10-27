import React from 'react'
import { jobReceived } from '../../api/DashboardApi'
import { Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import {faFlag} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';

interface JobData {
    title: string,
    description: string,
    star: number,
    status: string
}

interface JobHiredProps {
    jobData: JobData
}

const JobHired: React.FC<JobHiredProps> = ({jobData}) => {
    const status = jobData.status;
    let mode = 0;
    switch (status) {
        case 'todo':
            mode = 1
            break;
        case 'doing':
            mode = 2
            break;
        case 'checking':
            mode = 3
            break;
        case 'done':
            mode = 4
            break;
        default:
            break;
    }
    const Navigate = useNavigate();
    const handleFinshTask = async () => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            Navigate('/login')
            return;
        }
        const response = await jobReceived(token, jobData.title);
        if (!response.ok) {
            throw new Error('finshTask error');
        }
        return response;
    }
  return (
    <figure className='px-16 py-5 rounded-xl bg-white'>
        <section className='flex justify-between items-center space-y-5'>
            <div className='text-red-400 text-xm space-y-1'>
                <h2 className='text-4xl font-bold'>{jobData.title}</h2>
                <p>{jobData.description}</p>
            </div>
            <div>
                <button onClick={handleFinshTask}>กดเพื่อเสร็จสิ้นงาน</button>
            </div>
        </section>
        <section className='flex space-x-5 items-center justify-center mt-5 text-5xl shadow-md p-10 rounded-xl bg-red-200'>
            <FontAwesomeIcon 
                icon={ mode >= 1 ? faUser : faCircleCheck} 
                
            />
            <p className='text-xl text-white'>・・・</p>
            <FontAwesomeIcon 
                icon={mode >= 2 ? faClock : faCircleCheck}
            />
            <p className='text-xl text-white'>・・・</p>
            <FontAwesomeIcon 
                icon={mode >= 3 ? faMoneyCheck : faCircleCheck} 
            />
            <p className='text-xl text-white'>・・・</p>
            <FontAwesomeIcon 
                icon={mode >= 4 ? faFlag : faCircleCheck} 
            />
        </section>
    </figure>
  )
}

export default JobHired