import React, { useState, useEffect } from "react";
import ProfileView from "./profileView";
import ProfileEdit from "./profileEdit";
import { fetchUserProfile } from "../../api/profileApi";
import { Link } from "react-router-dom";
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
    <main className="bg-gray-100 min-h-screen">
        <div className="text-center py-5 bg-white">
            <h1 className="text-3xl font-semibold text-gray-800">My Profile</h1>
        </div>

        <div className="flex justify-center py-4 bg-white">
            <Link to = '/dashboard' className="mx-2 text-indigo-600 hover:text-indigo-800">
                Job Summary
            </Link>
            <button
                onClick={toggleEdit}
                className="mx-2 text-indigo-600 hover:text-indigo-800">
                {isEdit ? "Save Change" : "Edit Profile"}
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
