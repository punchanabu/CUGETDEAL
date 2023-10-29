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
        <main className='bg-white p-10 rounded-xl text-red-400 flex justify-between shadow-md w-3/4'>
            <section className='flex space-x-6'>
                <img className='w-1/3 rounded-full' src="https://i.pinimg.com/236x/51/96/3f/51963f47ba77810edde84122d32763f3.jpg" alt="Job Thumbnail" />
                <section className='space-y-4 flex flex-col'>
                    <h1 className='text-3xl'>{data.title}</h1>
                    <p className='font-base font-light'>{data.description}</p>
                    <div>
                        <span>✩✩✩✩✩ ({0})</span>
                    </div>
                </section>
            </section>
            <section className='flex flex-col items-end justify-end'>
                <Link to={`/${data.userId}`} className='py-5 px-10 bg-red-400 text-white rounded-xl'>MORE DETAILS</Link>
            </section>
        </main>
    );
};

export default Job;
