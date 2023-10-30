import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
 
    <div className="w-screen h-screen p-10 flex flex-col" id = "make-padding-buttom">
    <div className="text-container flex flex-col">
    <h1 className="text-white text-2xl font-bold" id = "headertext">สวัสดี! ,หางานอยู่หรอ?</h1>
    <h1 className="text-white text-2xl font-bold" id = "headertext2">ให้เราช่วยคุณสิ!</h1>

    <h3 className="text-white text-2xl font-bold" id = "regtext">กดเพื่อลงทะเบียนสมาชิก</h3>

    
    <a href="/Register" title ="head to reg">
    <div className="btn">

    <button id = "register"> 
      <span>
        REGISTER
      </span>
    </button>

    </div>
    </a>

    <h3 className="text-white text-2xl font-bold" id = "logtext">หากมีบัญชีอยู่แล้ว？</h3>
    <a href="/Login">
    <div className="btn">
    <button  id = "login">
      <span>LOGIN</span>
    </button>
    </div>
    </a>
    </div>

    <div className="image-container">
    <div id = "stationery_img"></div>
    </div>

    </div>


  )

}

export default Home