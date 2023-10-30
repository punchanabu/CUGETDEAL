import React, { useState } from "react";
import { updateUserProfile } from "../../api/profileApi";

interface ProfileDataProps {
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
  onSave: (data: ProfileDataProps) => void; // Callback to handle save
}

const ProfileEdit: React.FC<ProfileDataProps> = ({
  // set default value
  name = "",
  surname = "",
  location = "",
  country = "",
  email = "",
  tel = "",
  faculty = "",
  univer = "",
  description = "",
  interest = "",
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileDataProps>({
    name,
    surname,
    location,
    country,
    email,
    tel,
    faculty,
    univer,
    description,
    interest,
    onSave,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
    try {
      const response = await updateUserProfile(formData, localStorage.getItem("jwt"));
      if(response.status === 200) {
        console.log('Profile updated successfully:', response.data);
      } else {
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="shadow-lg h-max m-4 p-7 border-2 rounded-md bg-[#FFFFFF]">
          <div className="flex">
            <div>
              <img
                className="w-36 mr-10 rounded-2xl"
                src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                alt="profilePic"
              />
            </div>
            <div>
              <h3 className="flex justify-center items-center text-xl p-1">
                <p className="my-2 w-full">Name :</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="my-2 mr-1.5 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </h3>
              <div className="flex justify-center items-center m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </p>
              </div>

              <div className="flex justify-center items-center m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex justify-center items-center m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <input
                  type="text"
                  name="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-lg m-4 p-7 border-2 rounded-md bg-[#FFFFFF]">
          <div className="inline-flex flex-col">
            <h3 className="flex justify-center items-center text-xl p-1">
              <p>คณะที่กำลังศึกษา :</p>
              <input
                type="text"
                name="faculty"
                id="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </h3>
            <h3 className="flex justify-center items-center text-xl p-1">
              <p>มหาวิทยาลัยที่กำลังศึกษา : </p>
              <input
                type="text"
                name="univer"
                id="univer"
                value={formData.univer}
                onChange={handleChange}
                className="my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </h3>
          </div>
        </div>

        <div className="shadow-lg m-4 p-7 border-2 rounded-md bg-[#FFFFFF]">
          <div className="inline-flex flex-col">
            <h3 className="text-xl p-1">ประสบการณ์การทำงาน / ผลงาน</h3>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="text-2xl my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="shadow-lg m-4 p-7 border-2 rounded-md bg-[#FFFFFF]">
          <div className="inline-flex flex-col">
            <h3 className="text-xl p-1">สิ่งที่สนใจ</h3>
            <input
              type="text"
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              className="text-2xl my-2 w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center shadow-lg w-screen m-auto p-2 border-4 rounded-md text-[#FFFFFF] bg-[#F7A6A6] hover:bg-[#FFFFFF] hover:text-[#F7A6A6]"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
