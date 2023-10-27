import React from 'react';

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
  return (
    <figure>
        <div>
            <h1>{userJobData.title}</h1>
            <p>{userJobData.description}</p>
            <p>{userJobData.star}</p>
        </div>
        <div>
            {userJobData.contact.phone}
            {userJobData.contact.email}
            {userJobData.contact.instagram}
            {userJobData.contact.twitter}
        </div>
    </figure>
  );
};

export default UserJob;
