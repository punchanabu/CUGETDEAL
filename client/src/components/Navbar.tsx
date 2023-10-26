import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <main className="flex justify-between font-mono p-5 items-center">
            <div className="flex space-x-10 items-center">
                <h1 className = "text-2xl font-bold text-red-300"><Link to = "/">CUGETDEAL</Link></h1>
                <Link to = "/"className="text-lg font-bold text-red-400">หน้าหลัก</Link>
                <Link to = "/content" className="text-lg font-bold text-red-300">จ้างนิสิต</Link>
                <Link to = "/reward"className="text-lg font-bold text-red-300" >รางวัล</Link>
                <Link to = "/dashboard"className="text-lg font-bold text-red-300" >แดชบอร์ด</Link>
            </div>
            <div className="bg-red-300 rounded-xl px-4 py-2 text-white">
                <Link to = "/login">Login | </Link>
                <Link to = "/Register">Register</Link>
            </div>
        </main>        
    )
}