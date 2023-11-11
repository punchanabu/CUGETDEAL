import React from 'react'
import { deleteJob } from '../../api/DashboardApi'
import { useNavigate } from 'react-router-dom'
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
    status: string,
    creator: string
}

interface JobHiredProps {
    jobData: JobData
}

const JobHired: React.FC<JobHiredProps> = ({jobData}) => {
    const status = jobData.status;
    let mode = 0;
    const getIcon = (status: unknown) => {
        switch (status) {
            case 'todo': return faUser;
            case 'doing': return faClock;
            case 'checking': return faMoneyCheck;
            case 'done': return faFlag;
            default: return faCircleCheck;
        }
    }
    const Navigate = useNavigate();
    const handleFinshTask = async () => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            Navigate('/login')
            return;
        }
        const creator = jobData.creator;
        const response = await deleteJob(token, creator, jobData.title);
        if (!response.ok) {
            throw new Error('finshTask error');
        }
        return response;
    }
    return (
        <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold text-gray-800'>{jobData.title}</h2>
                <button onClick={handleFinshTask} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Finish Task</button>
            </div>
            <p className='text-gray-600'>{jobData.description}</p>
            <div className='flex items-center justify-center mt-4'>
                <FontAwesomeIcon icon={getIcon(status)} className='text-2xl text-blue-500 mr-2' />
                <span className='text-gray-700 font-medium'>{jobData.status.charAt(0).toUpperCase() + jobData.status.slice(1)}</span>
            </div>
        </div>
    )
}

export default JobHired