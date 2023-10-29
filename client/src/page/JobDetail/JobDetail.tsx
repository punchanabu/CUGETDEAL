import React, { useState }  from "react";
import JobView from "./Jobview";
import './JobDetail.css';


const JobDetail = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState({
        title : "kuykuy",
        name : "NameNameName",
        time : 10,
        jobdetails : "จ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทลจ้อบดีเทล",
        requirements : "รีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้นรีควายเม้น",
        remarks : "รีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าครีม้าค",
    });

    const toggleEdit = () => {
        setIsEdit(!isEdit);
      };
      const handleSave = (updatedata: typeof data) => {
        setData(updatedata);
        setIsEdit(false);
      }
    // implement your logic here

    return (
        <main className="text-[#F7A6A6] font-bold">
        <div id="send-request-container">
            <button type="submit" id = "send-request" className=" hover:text-[#FFFFFF]">
                <span id = "submit-text">ยื่นคำขอทำงานเลย！</span>
                    </button>
        </div>
        {!isEdit && <JobView {...data} />}
        </main>
    )
}

export default JobDetail;