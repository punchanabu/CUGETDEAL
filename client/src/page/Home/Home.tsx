import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section with Gradient Background */}
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
                <h1 className="mb-6 text-4xl md:text-6xl font-bold text-center text-white">Welcome to CUGETDEAL</h1>
                <p className="mb-8 text-lg text-center text-white">Connecting you to your next opportunity.</p>
                <Link to="/Register" className="px-6 py-3 bg-white text-blue-600 text-lg rounded-md hover:bg-gray-100 transition duration-300">
                    Join Now
                </Link>
            </div>

            {/* About Section with Icons or Simple Illustrations */}
            <section className="container mx-auto px-6 p-10">
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Why Choose CUGETDEAL?</h4>
                        <p className="text-gray-600 mb-8">Discover diverse opportunities and find your perfect job fit with us. Our platform offers a seamless job search experience tailored to your skills and preferences.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <div className="bg-indigo-600">
                <div className="container mx-auto px-6 text-center py-10">
                    <h2 className="mb-6 text-4xl font-bold text-center text-white">Start Your Journey Today!</h2>
                    <p className="mb-8 text-lg text-white">Join our community and explore a world of opportunities.</p>
                    <Link to="/Register" className="bg-white text-indigo-600 px-5 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
