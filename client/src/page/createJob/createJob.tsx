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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a Job Posting</h1>
          
          {/* Title Input */}
          <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input
                  type="text"
                  name="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
              />
          </div>

          {/* Job Kind Input */}
          <div className="mb-4">
              <label htmlFor="job_kind" className="block text-gray-700 text-sm font-bold mb-2">Job Kind</label>
              <input
                  type="text"
                  name="job_kind"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setJobKind(e.target.value)}
                  value={job_kind}
              />
          </div>

          {/* Hire Kind Input */}
          <div className="mb-4">
              <label htmlFor="hire_kind" className="block text-gray-700 text-sm font-bold mb-2">Hire Kind</label>
              <input
                  type="text"
                  name="hire_kind"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setHireKind(e.target.value)}
                  value={hire_kind}
              />
          </div>

          {/* Job Period Input */}
          <div className="mb-4">
              <label htmlFor="job_period" className="block text-gray-700 text-sm font-bold mb-2">Job Period</label>
              <input
                  type="text"
                  name="job_period"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setJobPeroid(e.target.value)}
                  value={job_period}
              />
          </div>

          {/* Description Input */}
          <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea
                  name="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
              />
          </div>

          {/* Star Rating Input */}
          <div className="mb-6">
              <label htmlFor="star" className="block text-gray-700 text-sm font-bold mb-2">Star Rating</label>
              <input
                  type="number"
                  name="star"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  min={0}
                  max={5}
                  onChange={(e) => SetStar(Number(e.target.value))}
                  value={star}
              />
          </div>

          {/* Submit Button */}
          <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
              Submit
          </button>
      </form>
  </div>
    );
}