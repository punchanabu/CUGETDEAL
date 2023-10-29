import React, { useState }  from "react";
import './JobDetail.css';

interface JobDetailsData{
    title : string;
    name : string;
    time : number;
    jobdetails : string;
    requirements : string;
    remarks : string;
}

const JobView: React.FC<JobDetailsData> = ({
    title,
    name,
    time,
    jobdetails,
    requirements,
    remarks,
}) => {
    return (
        <main className="text-[#F7A6A6] font-bold">
            <h1 className="text-[#FFFFFF]" id = "title">
                Title : {title}
            </h1>
            <div id = "details-container">
            <div id = "details-content">

            
            <h1 className="text-[#F7A6A6] text-4xl">
                ผู้ว่าจ้าง  : {name}
            </h1>
            <div id = "brz-smol"></div>
            <h1 className="text-[#F7A6A6] text-xl">
                ลงประกาศเมื่อ : {time} ชั่วโมงที่แล้ว
            </h1>
            <div id = "brz"></div>
            <h1 className="text-[#F7A6A6] text-4xl">
                รายละเอียดงาน 
            </h1>
            <div id = "brz-smol"></div>
            <h1 className="text-[#F7A6A6] text-xl">
            {jobdetails}
            </h1>
            <div id = "brz"></div>
            <h1 className="text-[#F7A6A6] text-4xl">
                คุณสมบัติผู้รับงาน
            </h1>
            <div id = "brz-smol"></div>
            <h1 className="text-[#F7A6A6] text-xl">
                {requirements}
            </h1>

            </div>
            <div id = "brz"></div>
            <div id = "remarks-container">
            <h1 className="text-[#F7A6A6] text-4xl">
                หมายเหตุ
            </h1>
            <div id = "brz"></div>
            <h1 className="text-[#F7A6A6] text-xl">{remarks}</h1>
            </div>
            </div>
        </main>
    )
}

export default JobView;