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
    onSave: (data: ProfileDataProps) => void;
}

const ProfileEdit: React.FC<ProfileDataProps> = ({
    name: initialName = "",
    surname: initialSurname = "",
    location: initialLocation = "",
    country: initialCountry = "",
    email: initialEmail = "",
    tel: initialTel = "",
    faculty: initialFaculty = "",
    univer: initialUniver = "",
    description: initialDescription = "",
    interest: initialInterest = "",
    onSave,
}) => {
    const [formData, setFormData] = useState<ProfileDataProps>({
        name: initialName,
        surname: initialSurname,
        location: initialLocation,
        country: initialCountry,
        email: initialEmail,
        tel: initialTel,
        faculty: initialFaculty,
        univer: initialUniver,
        description: initialDescription,
        interest: initialInterest,
        onSave,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
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
        <div className="container mx-auto p-6">
            <form onSubmit={handleSubmit} className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name and Surname */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    {/* Location and Country */}
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    {/* Email and Tel */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="tel"
                        placeholder="Telephone"
                        value={formData.tel}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    {/* Faculty and University */}
                    <input
                        type="text"
                        name="faculty"
                        placeholder="Faculty"
                        value={formData.faculty}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="univer"
                        placeholder="University"
                        value={formData.univer}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md"
                    />

                    {/* Description */}
                    <div className="md:col-span-2">
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                            rows={3}
                        ></textarea>
                    </div>

                    {/* Interest */}
                    <div className="md:col-span-2">
                        <textarea
                            name="interest"
                            placeholder="Interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md w-full"
                            rows={3}
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
