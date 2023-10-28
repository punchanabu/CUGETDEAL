import React from "react"
import JobList from "../../components/main/JobList";
import { Link } from "react-router-dom";
import './style.css'
const list = [
    {   
        userId: "12",
        title: "Job Title 1",
        description: "Job Description 1",
        job_kind: "งานด่วน",
        hire_kind: "งานชั่วคราว",
        job_peroid: "1 วัน",
        star: 5
    },
    {
        userId: "32",
        title: "Job Title 2",
        description: "Job Description 2",
        job_kind: "งานด่วน",
        hire_kind: "งานชั่วคราว",
        job_peroid: "1 วัน",
        star: 4
    }
];
export default function MainContent() {

    const [search, setSearch] = React.useState("");
    const [filter, setFilter] = React.useState("title");
    const [showDropdown, setShowDropdown] = React.useState(false);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <main className="h-screen bg-form font-bold bg-red-300 space-y-8">
            {/* this is the top section for text and button*/}
            <div className = "topzone flex justify-center items-center space-x-4">
                <div className="text-4xl text-white mt-6">
                    <h1>หาคนทำงานอยู่หรือเปล่า?</h1>
                    <h1>กดสร้างงานเลย?</h1>
                </div>
                <Link to = "/create" className="text-white font-bold text-xl bg-red-400 px-10 py-5 rounded-xl shadow-md">สร้างงาน</Link>
            </div>

            <div className = "findzone flex flex-col items-center">
                
                <div className = "text-white text-xl w-3/4">
                    <p className="text-2xl">ค้นหางาน</p>
                    <div className = "flex space-x-2">
                        <input 
                            type="textinput" 
                            className="px-5 py-2 rounded-xl w-full text-stone-500" 
                            onChange={handleSearch} 
                            value={search}/>
                        <button 
                            className = "bg-red-400 p-2 rounded-xl"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            sort by:
                        </button>
                        {showDropdown && (
                            <div className="absolute right-10 top-80 mt-2 w-40 rounded-md shadow-lg bg-white z-20">
                                <div className="py-1 flex-col flex justify-center items-center">
                                    <button onClick={() => setFilter("title")} className="text-black">title</button>
                                    <button onClick={() => setFilter("star")} className="text-black">star</button>
                                    <p className="text-black">{filter}</p>
                                </div>
                            </div>
                        )}
                    </div>  
                </div>
            </div>
            <JobList list = {list} query = {search} filter = {filter}/>
        </main>
    )
}

