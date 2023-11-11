import React from "react"
import JobList from "../../components/main/JobList";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { populateJobBoard } from '../../api/ContentApi';
import { useNavigate } from "react-router-dom";
interface JobForm {
    userId: object;
    title: string;
    job_kind: string;
    hire_kind: string;
    job_period: string; // Assuming it's a string; if it's a Date, adjust accordingly.
    description: string;
    star: number; // Note: star (singular) to match your form state.
}
interface FetchedJob {
    user: any; // adjust the type accordingly
    home1: JobForm;
}
// const list = [
//     {   
//         userId: "12",
//         title: "Job Title 1",
//         description: "Job Description 1",
//         job_kind: "งานด่วน",
//         hire_kind: "งานชั่วคราว",
//         job_peroid: "1 วัน",
//         star: 5
//     },
//     {
//         userId: "32",
//         title: "Job Title 2",
//         description: "Job Description 2",
//         job_kind: "งานด่วน",
//         hire_kind: "งานชั่วคราว",
//         job_peroid: "1 วัน",
//         star: 4
//     }
// ];
export default function MainContent() {
    const navigate = useNavigate();
    const [jobs, setJobs] = React.useState([]); 
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState("");
    const [filter, setFilter] = React.useState("title");
    const [showDropdown, setShowDropdown] = React.useState(false);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    useEffect(() => {
      const populate = async () => {
          try {
              setLoading(true);
              const token = localStorage.getItem('jwt');
              if (!token) {
                navigate('/login');
                return;
              }
              const fetchedJobs = await populateJobBoard(token);
              const home1Data = fetchedJobs.map((item: FetchedJob )=> item.home1);
              console.log(home1Data);
              setJobs(home1Data);
          } catch (error) {
              console.error('Failed to fetch jobs', error);
          } finally {
              setLoading(false);
          }
      };
      populate();
    }, []);
    return  (
        <div className="bg-gray-100 min-h-screen">
            {loading ? 
                <p className="text-center text-xl mt-5">Loading...</p> 
                : 
                <main className="container mx-auto p-6">
                    {/* Top section for text and button */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">หาคนทำงานอยู่หรือเปล่า?</h1>
                        <Link to="/create" className="text-lg font-semibold bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">สร้างงาน</Link>
                    </div>

                    {/* Search and Sort Section */}
                    <div className="mb-10">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    className="border border-gray-300 rounded-lg py-2 px-5 pr-10 w-96 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                                    placeholder="ค้นหางาน" 
                                    value={search} 
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <button 
                                className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300" 
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Sort by
                            </button>
                        </div>
                        {showDropdown && (
                            <div className="absolute mt-1 rounded-md shadow-lg bg-white z-20">
                                <div className="py-1 flex flex-col justify-center items-center">
                                    <button onClick={() => setFilter("title")} className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm">Title</button>
                                    <button onClick={() => setFilter("star")} className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm">Star</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Job List */}
                    <JobList list={jobs} query={search} filter={filter}/>
                </main>
            }
        </div>
    );
}
