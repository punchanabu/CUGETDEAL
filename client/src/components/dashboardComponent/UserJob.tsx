import React from 'react';
import { finshJob } from '../../api/DashboardApi';
import { useNavigate } from 'react-router-dom';
interface Contact {
  phone: string;
  email: string;
  instagram: string;
  twitter: string;
}

interface UserJobData {
  title: string;
  description: string;
  star: number;
  contact: Contact;
}

interface UserJobProps {
  userJobData: UserJobData;
}

const UserJob: React.FC<UserJobProps> = ({ userJobData }) => {
    const navigate = useNavigate();
    const handleFinshJob = async () => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            navigate('/login');
            return;
        }
        const response = await finshJob(token, userJobData.title);
        if (!response.ok) {
            throw new Error('finshJob error');
        }
        return response;
    }
  return (
    <figure className='p-16 bg-white rounded-xl flex space-x-5'>
        <div className='text-red-500 space-y-4'>
            <h1 className='text-4xl'>{userJobData.title}</h1>
            <p className='font-bold text-md '>{userJobData.description}</p>
            
        </div>
        <div className='flex flex-col justify-center space-y-5'>
            <div className='flex flex-col justify-center'>
              {userJobData.contact.phone && <span>{userJobData.contact.phone}</span>}
              {userJobData.contact.email && <span>{userJobData.contact.email}</span>}
              {userJobData.contact.twitter && <span>{userJobData.contact.twitter}</span>}
            </div>
            <button onClick={handleFinshJob} className='bg-red-300 rounded-xl px-10 py-5 text-white text-xl'>เสร็จงานแล้วคร้บบบ</button>
        </div>
    </figure>
  );
};

export default UserJob;
