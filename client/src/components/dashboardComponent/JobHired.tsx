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
        const creator = jobData.creator;
        const response = await deleteJob(token, creator, jobData.title);
        if (!response.ok) {
            throw new Error('finshTask error');
        }
        return response;
    }
  return (
    <figure className='px-16 py-5 rounded-xl bg-white'>
        <section className='flex justify-between items-center space-y-5'>
            <div className='text-red-400 text-xm space-y-4'>
                <h2 className='text-4xl font-bold'>{jobData.title}</h2>
                <p>{jobData.description}</p>
            </div>
            <div>
                <button className = "text-white text-xl bg-red-300 rounded-xl px-10 py-5 font-bold shadow-md"onClick={handleFinshTask}>กดเพื่อเสร็จสิ้นงาน</button>
            </div>
        </section>
        <section className='flex space-x-5 items-center justify-center mt-5 text-5xl shadow-md p-10 rounded-xl bg-red-300 text-white'>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <FontAwesomeIcon 
                    icon={ mode >= 1 ? faCircleCheck : faUser} 

                />
                <p className='text-base font-black'>ได้รับงาน</p>
            </div>
            <p className='text-xl text-white'>・・・</p>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <FontAwesomeIcon 
                    icon={mode >= 2 ? faCircleCheck : faClock}
                />
                <p className='text-base font-black'>ดำเนินงาน</p>
            </div>
            <p className='text-xl text-white'>・・・</p>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <FontAwesomeIcon 
                    icon={mode >= 3 ? faCircleCheck : faMoneyCheck} 
                />
                <p className='text-base font-black'>ตรวจสอบงาน</p>
            </div>
            <p className='text-xl text-white'>・・・</p>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <FontAwesomeIcon 
                    icon={mode >= 4 ? faCircleCheck : faFlag} 
                />
                <p className='text-base font-black'>ส่งมอบเสร็จสิ้น</p>
            </div>
        </section>
    </figure>
  )
}

export default JobHired