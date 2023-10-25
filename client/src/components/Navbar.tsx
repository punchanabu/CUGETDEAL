import React from "react";

export default function Navbar() {
    return (
        <main className="flex justify-between font-mono p-5 items-center">
            <div className="flex space-x-10 items-center">
                <h1 className = "text-2xl font-bold text-red-300">CUGETDEAL</h1>
                <a className="text-lg font-bold text-red-400">หน้าหลัก</a>
                <a className="text-lg font-bold text-red-300">จ้างนิสิต</a>
                <a className="text-lg font-bold text-red-300" >แดชบอร์ด</a>
            </div>
            <div className="bg-red-300 rounded-xl px-4 py-2 text-white">
                Login
            </div>
        </main>        
    )
}