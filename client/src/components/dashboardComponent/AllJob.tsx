import React from 'react';
import JobHired from './JobHired';

interface JobData {
    title: string;
    description: string;
    star: number;
    status: string;
}

interface AllJobProps {
    jobData: JobData[];
}

const AllJob: React.FC<AllJobProps> = ({ jobData }) => {
  return (
    <section className='flex flex-col items-center space-y-5'>
        {jobData.map((data, index) => <JobHired key={index} jobData={data} />)}
    </section>
  );
};

export default AllJob;
