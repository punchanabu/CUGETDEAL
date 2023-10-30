import React, { useState, useEffect } from "react";
import './JobDetail.css';
import { fetchHome1ByTitle } from "../../api/ContentApi";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../api/UserApi";

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
            return;
            navigate('/login');
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

    if (!jobData) return null;

    return (
        <main className="text-[#F7A6A6] font-bold">
            <div id="send-request-container">
                <button type="submit" id = "send-request" className=" hover:text-[#FFFFFF]" onClick={handleRequestClick}>
                    <span id = "submit-text">ยื่นคำขอทำงานเลย！</span>
                </button>
            </div>
            <h1 className="text-white" id="title">Title : {jobData.title}</h1>
            <div id="details-container">
                <div id="details-content">
                    <h1 className="text-[#F7A6A6] text-4xl">
                        ผู้ว่าจ้าง : {jobData.name} {jobData.surname}
                    </h1>
                    <h1 className="text-[#F7A6A6] text-4xl">รายละเอียดงาน</h1>
                    <h1 className="text-[#F7A6A6] text-xl">{jobData.description}</h1>
                    <h1 className="text-[#F7A6A6] text-4xl">คุณสมบัติผู้รับงาน</h1>
                    <h1 className="text-[#F7A6A6] text-xl">
                        Job Kind: {jobData.job_kind} <br />
                        Hire Kind: {jobData.hire_kind} <br />
                        Job Period: {jobData.job_period}
                    </h1>
                </div>
            </div>
        </main>
    );
}

export default JobView;
