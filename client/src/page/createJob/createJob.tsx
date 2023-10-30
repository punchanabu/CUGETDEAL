import React from "react";
import { useState } from 'react';
import { Createjob } from '../../api/CreateJobApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserId } from "../../api/UserApi";
export default function CreateJob() {
    const [title , setTitle] = useState('');
    const [job_kind, setJobKind] = useState('');
    const [hire_kind, setHireKind] = useState('');
    const [job_period, setJobPeroid] = useState('');
    const [description, setDescription] = useState('');
    const [star, SetStar] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => { // what is this function call
        event.preventDefault(); 
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            navigate('/login');
            return;
        }
        const id = await getUserId(jwt);
        const userId = id.userId;
        const data = {
            userId,
          title,
          job_kind,
          hire_kind,
          job_period,
          description,
          star,
        };
        const token = localStorage.getItem('jwt');
        if (!token) {
            navigate('/login');
            return;
        }
        console.log(data);
        const res = await Createjob(data,token); // ??
        console.log(res);
        navigate('/content');//ต้อง import ไฟล์อะไรบ้าง
      };

    return (
        <main className="flex justify-center items-center h-screen bg-form font-bold">
      <form
        className="flex flex-col space-y-5 bg-pink-200 p-10 bg-white font-mono rounded-xl text-red-300 border-solid border-2 border-red-300 justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold ">สร้างประกาศรับงาน</h1>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="title"
            name="title"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setTitle(e.target.value)}//??
            value={title}// ?? 
          />
        </div>

        <div>
          <label htmlFor="job_kind">job_kind</label>
          <input
            type="job_kind"
            name="job_kind"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setJobKind(e.target.value)}
            value={job_kind}
          />
        </div>
        <div>
          <label htmlFor="hiringtype">hiringtype</label>
          <input
            type="hiringtype"
            name="hiringtype"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setHireKind(e.target.value)}
            value={hire_kind}
          />
        </div>

        <div>
          <label htmlFor="duration">duration</label>
          <input
            type="duration"
            name="duration"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setJobPeroid(e.target.value)}
            value={job_period}
          />
        </div>

        <div>
          <label htmlFor="description">other information</label>
          <input
            type="description"
            name="description"
            className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        
        <button
          type="submit"
          className="rounded-xl w-1/2 p-3 bg-red-300 text-white text-center self-center"
        >
          ยืนยัน
        </button>
      </form>
    </main>
    );
}