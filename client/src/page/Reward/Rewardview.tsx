import React, { useState }  from "react";
import './Reward.css';

interface RewardData{
    name: string;
    price: number;
    description: string;

    name2: string;
    price2: number;
    description2: string;
}

const RewardView: React.FC<RewardData> = ({
    name,
    price,
    description,
    name2,
    price2,
    description2
}) => {
    return (

        <main className="text-[#F7A6A6] font-bold" id = "biggest-box">
            <div id = "reward-container">
            <div id = "reward-box">
            <div id = "text-reward-box">
                <h1 className="name-reward ">{name}</h1>
                <h1 className="price-reward ">PRICE : {price}</h1>
                <h1 className="description-reward ">Description : {description}</h1>
                <button type="submit" id = "send-request-buy" className=" hover:text-[#F7A6A6] text-[#FFFFFF] font-bold">
                    
                <span id = "buy-text">ซื้อเลยจ้า!</span>
                    </button>
            </div>
            
            <div id = "teddy-bear-img"></div>
            </div>

            <div id = "brz"></div>

            <div id = "reward-box">
            <div id = "text-reward-box">
                <h1 className="name-reward text-[#F7A6A6] font-bold">{name2}</h1>
                <h1 className="price-reward text-[#F7A6A6] font-bold">PRICE : {price2}</h1>
                <h1 className="description-reward text-[#F7A6A6] font-bold">Description : {description2}</h1>
                <button type="submit" id = "send-request-buy" className=" hover:text-[#F7A6A6] text-[#FFFFFF] font-bold">
 
                <span id = "buy-text" >ซื้อเลยจ้า!</span>
                    </button>
            </div>
            <div id = "unicorn-horn"></div>
            </div>
            </div>
        </main>
    )
}

export default RewardView;