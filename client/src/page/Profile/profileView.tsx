import React from "react";

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
}

const ProfileView: React.FC<ProfileDataProps> = ({
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
}) => {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <h2 className="text-xl font-semibold col-span-2">Personal Information</h2>
                    <div className="text-gray-700">
                        <strong>Name:</strong> {name} {surname}
                    </div>
                    <div className="text-gray-700">
                        <strong>Email:</strong> {email}
                    </div>
                    <div className="text-gray-700">
                        <strong>Location:</strong> {location}, {country}
                    </div>
                    <div className="text-gray-700">
                        <strong>Telephone:</strong> {tel}
                    </div>
                    <div className="text-gray-700">
                        <strong>Faculty:</strong> {faculty}
                    </div>
                    <div className="text-gray-700">
                        <strong>University:</strong> {univer}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Interest</h2>
                    <p className="text-gray-700">{interest}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
