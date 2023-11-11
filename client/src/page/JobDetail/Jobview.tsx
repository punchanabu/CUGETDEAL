import React, { useState, useEffect } from "react";
import { fetchHome1ByTitle } from "../../api/ContentApi";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../api/UserApi";
import Spinner from "../../components/Spinner";

interface JobDetailsData {
    title: string;
    name: string; 
    surname: string; 
    job_kind: string;
    hire_kind: string;
    job_period: string;
    description: string;
    creator_id : string;
    
}

const JobView: React.FC = () => {
    const pathSegments = window.location.pathname.split('/');
    const titleValue = pathSegments[pathSegments.length - 1];

    const [jobData, setJobData] = useState<JobDetailsData | null>(null);
    const navigate = useNavigate();
    const jobTitle = jobData?.title;
    const creatorId = jobData?.creator_id;
    const backendEndPoint = 'http://localhost:3222'
    const handleRequestClick = async () => {
        const token = localStorage.getItem('jwt');
        if(!token) {
            navigate('/login');
            console.log('no token for requesting a job')
            return;
        }
        const id = await getUserId(token);
        const userId = id.userId;
        if (userId) {
            await fetch(`${backendEndPoint}/dashboard`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ userId, jobTitle, creatorId })
            });
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('jwt');
            if (!token) {
                navigate('/login');
                return;
            }
            const data = await fetchHome1ByTitle(token, titleValue);
            console.log("data:",data);
            setJobData({
                title: data.home1.title,
                name: data.user.name,
                surname: data.user.surname,
                job_kind: data.home1.job_kind,
                hire_kind: data.home1.hire_kind,
                job_period: data.home1.job_period,
                description: data.home1.description,
                creator_id : data.user.id
            });
        };
        fetchData();
    }, [titleValue, navigate]);

    if (!jobData) return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Spinner/>
        </div>
    
    );

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{jobData.title}</h1>
                    <div className="text-gray-600 mb-4">
                        <strong>Employer:</strong> {jobData.name} {jobData.surname}
                    </div>
                    <div className="mb-4">
                        <strong>Job Details:</strong>
                        <p>{jobData.description}</p>
                    </div>
                    <div className="mb-4">
                        <strong>Job Kind:</strong> {jobData.job_kind}<br />
                        <strong>Hire Kind:</strong> {jobData.hire_kind}<br />
                        <strong>Job Period:</strong> {jobData.job_period}
                    </div>
                    <button 
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                        onClick={handleRequestClick}>
                        Apply Now!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobView;
