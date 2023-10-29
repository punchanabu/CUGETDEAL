import React, { useState } from "react";
import './Reward.css';
import RewardView from "./Rewardview";


const Reward = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState({
        name : "Stupid Teddy Bear",
        price : 60,
       description : "หมีโง่สำหรับคนที่โดนเขาหลอกซ้ำหลอกซ้อนแต่ยังไม่รู้ตัวซักที",

       name2 : "Unicorn Horn",
        price2 : 600,
       description2 : "เขายูนิคอร์นสำหรับคนขี้เหงา เพราะต้องอยู่คนเดียวไม่มีคนเคียงข้าง"
    });

    const toggleEdit = () => {
        setIsEdit(!isEdit);
      };
      const handleSave = (updatedata: typeof data) => {
        setData(updatedata);
        setIsEdit(false);
      }
    
    // implement your logic here krub
    return (
        <main>
            {/* <div id = "reward-container">
            <div id = "reward-box">
                <h1>{name}</h1>
                <h1>{price}</h1>
                <h1>{description}</h1>
            </div>
            </div> */}
              {!isEdit && <RewardView {...data} />}
        </main>
    )
}

export default Reward;