import React from "react";

export default function Reward() {
    // Example list of rewards
    const rewards = [
        { id: 1, title: "Free Coffee Voucher", description: "Get a free cup of coffee at any of our partner cafes." },
        { id: 2, title: "Discount Coupon", description: "Enjoy a 20% discount on your next purchase." },
        { id: 3, title: "Exclusive T-Shirt", description: "An exclusive t-shirt for our top members." },
        // ... other rewards ...
    ];

    const handleRedeem = (rewardId: string) => {
        // Implement redeem logic
        console.log("Redeeming reward with ID:", rewardId);
        // You might want to connect this to your backend
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Rewards</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward) => (
                    <div key={reward.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                        <h2 className="text-xl font-semibold mb-2">{reward.title}</h2>
                        <p className="mb-4">{reward.description}</p>
                        <button
                            onClick={() => handleRedeem(reward.id.toString())}
                            className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Redeem
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
