import React, { FC, useEffect, useState } from 'react';
import Job from './Job';

interface JobData {
    userId: string;
    title: string;
    description: string;
    job_kind: string;
    hire_kind: string;
    job_peroid: string;
    star: number ; 
}

interface JobListProps {
    list: JobData[];
    query?: string;
    filter?: string;
}

const JobList: FC<JobListProps> = ({ list, query, filter }) => {
    const [filteredList, setFilteredList] = useState<JobData[]>([]);
    useEffect(() => {
        let newFilteredList = list.filter(job => 
            job.title.toLowerCase().includes(query?.toLowerCase() || '') ||
            job.description.toLowerCase().includes(query?.toLowerCase() || '')
        );

        // Sort based on filter
        if (filter === 'title') {
            newFilteredList.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filter === 'star') {
            newFilteredList.sort((a, b) => a.star - b.star);
        }

        setFilteredList(newFilteredList);

    }, [list, query, filter]);
    
    return (
        <main className='flex flex-col space-y-4 items-center justify-center'>
            {filteredList.map((job) => <Job key={job.userId} data={job} />)}
        </main>
    );
};

export default JobList;
