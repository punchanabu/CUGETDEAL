import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../api/UserApi';

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
  _id: string;
  creator: string;
}

interface UserJobProps {
  userJobData: UserJobData;
}

const backendEndPoint = 'http://localhost:3222';

const UserJob: React.FC<UserJobProps> = ({ userJobData }) => {
    const navigate = useNavigate();

    const finishJob = async () => {
      try {
          const title = userJobData.title;
          const creatorId = userJobData.creator;
          const token = localStorage.getItem('jwt');
          if (!token) {
            navigate('/login');
            return;
          }
          const id = await getUserId(token);
          const userId = id.userId;
          const response = await fetch(`${backendEndPoint}/dashboard/`, {
              method: 'DELETE',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  userId,
                  jobTitle: title,
                  creatorId,
              })
          });
  
          if (response.ok) {
              console.log("Job removed successfully");
              return response;
          } else {
              console.log("Failed to remove job");
              return null;
          }
      } catch(error) {
          console.log("Failed to remove job", error);
          return null;
      }
    }

    return (
      <figure className='p-16 bg-white rounded-xl flex space-x-5 justify-between'>
          <div className='text-red-500 space-y-4'>
              <h1 className='text-4xl'>{userJobData.title}</h1>
              <p className='font-bold text-md '>{userJobData.description}</p>
          </div>
          <div className='flex flex-col justify-center space-y-5'>
              <div className='flex flex-col justify-center'>
                {/* Commented out contact information */}
              </div>
              <button onClick={finishJob} className='bg-red-300 rounded-xl px-10 py-5 text-white text-xl'>เสร็จงานแล้วคร้บบบ</button>
          </div>
      </figure>
    );
};

export default UserJob;
