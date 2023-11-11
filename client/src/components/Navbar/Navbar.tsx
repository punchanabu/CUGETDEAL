import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserProfile } from '../../api/profileApi'; // Adjust the import path as needed
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            setIsLoggedIn(true);
            fetchUserDetails(token);
        }
    }, [userName]);

    const fetchUserDetails = async (token: string) => {
        try {
            const userProfile = await fetchUserProfile(token);
            setUserName(userProfile.name); // Assuming the API returns an object with a 'name' field
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Error fetching user details:", error);
            setIsLoggedIn(false);
        }
    };

    return (
        <nav className="bg-gray-50 border-b-2 border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
                            CUGETDEAL
                        </Link>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link to="/" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/content" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Hire Students</Link>
                        <Link to="/reward" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Rewards</Link>
                        <Link to="/dashboard" className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    </div>

                    <div className="ml-6 flex items-center">
                        {isLoggedIn ? (
                            <Link to="/profile" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-4 py-2">
                                <FontAwesomeIcon icon = {faUser}/> {userName || 'Profile'}
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 px-4 py-2">Login</Link>
                                <Link to="/Register" className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
