import React from 'react';
import UserJob from './UserJob';

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

interface UserJobListProps {
  userJobData: UserJobData[];
}

const UserJobList: React.FC<UserJobListProps> = ({ userJobData }) => {
  return (
    <div className='space-y-5 flex flex-col'>
      {userJobData.map((job, index) => (
        <UserJob key={index} userJobData={job} />
      ))}
    </div>
  );
};

export default UserJobList;
