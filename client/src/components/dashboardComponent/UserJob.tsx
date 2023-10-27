import React from 'react';
import { finshJob } from '../../api/DashboardApi';
import { Navigate, useNavigate } from 'react-router-dom';
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
    <figure className='p-16 bg-white'>
        <div>
            <h1>{userJobData.title}</h1>
            <p>{userJobData.description}</p>
            <p>{userJobData.star}</p>
        </div>
        <div>
            <button onClick={handleFinshJob}>เสร็จงานแล้วคร้บบบ</button>
            <span>{userJobData.contact.phone}</span>
            <span>{userJobData.contact.email}</span>
            <span>{userJobData.contact.instagram}</span>
            <span>{userJobData.contact.twitter}</span>
        </div>
    </figure>
  );
};

export default UserJob;
