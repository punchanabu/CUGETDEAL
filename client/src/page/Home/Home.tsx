import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div id = "body2">

    <div id = "bg-gradient"></div>

    <h1 className="text-white text-2xl font-bold" id = "headertext">สวัสดี! ,หางานอยู่หรอ?</h1>
    <h1 className="text-white text-2xl font-bold" id = "headertext2">ให้เราช่วยคุณสิ!</h1>

    <h3 className="text-white text-2xl font-bold" id = "regtext">กดเพื่อลงทะเบียนสมาชิก</h3>
    <h3 className="text-white text-2xl font-bold" id = "logtext">หากมีบัญชีอยู่แล้ว？</h3>

    <button id = "register">
      <span>REGISTER</span>
    </button>
    <button  id = "login">
      <span>LOGIN</span>
    </button>


    <div className="image-container">
    <div id = "stationery_img"></div>
    </div>

    </div>

  )

}

export default Home