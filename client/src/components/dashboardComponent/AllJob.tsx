import React from 'react';
import JobHired from './JobHired';

interface JobData {
    title: string;
    description: string;
    star: number;
    status: string;
    creator: string;
}

interface AllJobProps {
    jobData: JobData[];
}

const AllJob: React.FC<AllJobProps> = ({ jobData }) => {
  console.log("JobData:",jobData);
  return (
    <div className='space-y-4'>
      {jobData.map((data, index) => <JobHired key={index} jobData={data} />)}
  </div>
  );
};

export default AllJob;
