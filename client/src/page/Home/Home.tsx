import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div id = "body2" className="w-screen h-screen">
    <div id = "bg-gradient">
    <div className="w-screen h-screen p-10" id = "make-padding-buttom">
    <div className="text-container">
    <h1 className="text-white text-2xl font-bold" id = "headertext">สวัสดี! ,หางานอยู่หรอ?</h1>
    <h1 className="text-white text-2xl font-bold" id = "headertext2">ให้เราช่วยคุณสิ!</h1>

    <h3 className="text-white text-2xl font-bold" id = "regtext">กดเพื่อลงทะเบียนสมาชิก</h3>

    <div className="btn">
    <a href="/Register">
    <button id = "register"> 
      <span>
        REGISTER
      </span>
    </button>
    </a>
    </div>

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
    </div>
    <footer>
    <div id = "footers">
      <div id = "textfooter">
      <h1 id = "footergetdeal">CUGETDEAL</h1>
      <h4 id = "description">Are you a student of Chulalongkorn University, eager to jumpstart your career and find the perfect job opportunity? Look no further! CUGETDEAL is your dedicated platform to connect with exciting career prospects tailored to the unique skills and talents you've cultivated during your academic journey.</h4>
      <h1 id = "footergetdeal2"> All Right Reserved | Designed By CUGETDEAL</h1>
      </div>
    </div>
    </footer>
    </div>

  )

}

export default Home