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
        <div className='bg-white shadow-lg rounded-lg overflow-hidden my-4 p-6'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex-1'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{userJobData.title}</h2>
                <p className='text-gray-600'>{userJobData.description}</p>
              {/* Optionally display contact information here */}
            </div>
            <div className='mt-4 md:mt-0 md:flex md:flex-col md:items-end'>
              <button onClick={finishJob} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Complete Job</button>
            </div>
        </div>
      </div>
    );
};

export default UserJob;
