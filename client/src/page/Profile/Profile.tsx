import React, { useState } from "react";
import ProfileEdit from "./profileEdit";
import ProfileView from "./profileView";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({
    name: "Hello",
    surname: "World",
    location: "bangkok",
    country: "Thailand",
    email: "araimairu@gmail.com",
    tel: "12345",
    faculthy: "ComEng",
    univer: "chula",
    description: "description here...",
    interest: "data analysis"
  });

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = (updatedata: typeof data) => {
    setData(updatedata);
    setIsEdit(false);
  }

  return (
    <main className="flex flex-col text-[#F7A6A6] font-bold">
      {/* div 1 หัวข้อ */}
      <div className="flex justify-center items-center bg-zinc-50">
        <h1 className="text-3xl font-bold p-5">โปรไฟล์ของฉัน</h1>
      </div>

      {/* div 2  */}
      <div className="flex justify-center items-center  bg-zinc-50">
        <button className="shadow-lg w-screen m-2 p-2 border-2 flex justify-center items-center rounded-md text-[#FFFFFF] bg-[#F7A6A6] hover:bg-[#FFFFFF] hover:text-[#F7A6A6]">
          สรุปงาน
        </button>
        <button
          onClick={toggleEdit}
          className="shadow-lg w-screen m-2 p-2 border-2 flex justify-center items-center rounded-md text-[#FFFFFF] bg-[#F7A6A6] hover:bg-[#FFFFFF] hover:text-[#F7A6A6]"
        >
          {isEdit ? "แก้ไขโปรไฟล์" : "บันทึกข้อมูล"}
        </button>
      </div>
      {isEdit 
        ? <ProfileEdit {...data} onSave={handleSave} />  // <-- Add onSave prop here
        : <ProfileView {...data} />
      }
    </main>
  );
};

export default Profile;
