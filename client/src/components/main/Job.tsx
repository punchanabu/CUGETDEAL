import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Updated the JobProps interface to match the list object fields
interface JobProps {
    data: {
        userId: string; // Changed from id to userId
        title: string;
        description: string;
        job_kind: string;
        hire_kind: string;
        job_peroid: string;
        star: number | string; // It's okay to be unsure, the union type should handle it
    };
}

const Job: FC<JobProps> = ({ data }) => {
    console.log(data.star);
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden my-4'>
            <div className='flex items-center p-4'>
                <img className='w-16 h-16 rounded-full object-cover' src="https://i.pinimg.com/236x/51/96/3f/51963f47ba77810edde84122d32763f3.jpg" alt="Job Thumbnail" />
                <div className='ml-4'>
                    <h2 className='text-lg font-semibold text-gray-800'>{data.title}</h2>
                    <p className='text-gray-600'>{data.description}</p>
                    <p className='text-gray-600'>Rating: {data.star} ✩</p>
                    <Link to={`${data.title}`} className='inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm mt-2'>More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
