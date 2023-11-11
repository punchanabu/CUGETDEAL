import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-2">CUGETDEAL</h1>
                    <p className="text-center text-gray-300 mb-6 max-w-md">
                        Are you a student of Chulalongkorn University, eager to jumpstart your career and find the perfect job opportunity? Look no further! CUGETDEAL is your dedicated platform to connect with exciting career prospects tailored to the unique skills and talents you've cultivated during your academic journey.
                    </p>
                    <p className="text-gray-400 text-sm">
                        All Right Reserved | Designed By CUGETDEAL
                    </p>
                </div>
            </div>
        </footer>
    );
}
