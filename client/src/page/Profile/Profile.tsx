import React, { useState, useEffect } from "react";
import ProfileView from "./profileView";
import ProfileEdit from "./profileEdit";
import { fetchUserProfile } from "../../api/profileApi";

interface ProfileData {
  name: string;
  surname: string;
  location: string;
  country: string;
  email: string;
  tel: string;
  faculty: string;
  univer: string;
  description: string;
  interest: string;
}

const defaultProfileData: ProfileData = {
  name: "",
  surname: "",
  location: "",
  country: "",
  email: "",
  tel: "",
  faculty: "",
  univer: "",
  description: "",
  interest: ""
};

const fetchData = async (): Promise<any> => {
  const token = localStorage.getItem("jwt");
  const profile = await fetchUserProfile(token);
  return profile;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData>(defaultProfileData);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState<ProfileData>(defaultProfileData);
  // const [data, setData] = useState({
    // name: "Hello",
    // surname: "World",
    // location: "bangkok",
    // country: "Thailand",
    // email: "araimairu@gmail.com",
    // tel: "12345",
    // faculty: "ComEng",
    // univer: "chula",
    // description: "description here...",
    // interest: "data analysis"
  // });

  useEffect(() => {
      const getData = async () => {
          const fetchedProfile = await fetchData();
          setProfile(fetchedProfile);
          setData({
              name: fetchedProfile.name,
              surname: fetchedProfile.surname,
              location: fetchedProfile.location,
              country: fetchedProfile.country,
              email: fetchedProfile.email,
              tel: fetchedProfile.tel,
              faculty: fetchedProfile.faculty,
              univer: fetchedProfile.univer,
              description: fetchedProfile.description,
              interest: fetchedProfile.interest
          });
      };
      getData();
  }, []);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = (updatedata: any) => {
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
        ? <ProfileEdit {...data} onSave={handleSave} />
        : <ProfileView {...data} />
      }
    </main>
  );
};

export default Profile;
