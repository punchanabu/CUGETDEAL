import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className=" p-10" id="make-padding-button">
            <div className="text-container space-y-4">
                <section className='space-y-4'>
                  <h1 className="text-white text-2xl font-bold" id="headertext">สวัสดี!, หางานอยู่หรอ?</h1>
                  <h1 className="text-white text-2xl font-bold" id="headertext2">ให้เราช่วยคุณสิ!</h1>
                </section>
                <h3 className="text-white text-2xl font-bold" id="regtext">กดเพื่อลงทะเบียนสมาชิก</h3>
                <Link to="/Register" title="head to reg">
                    <div className="btn">
                        <button id="register">
                            <span>REGISTER</span>
                        </button>
                    </div>
                </Link>
                <h3 className="text-white text-2xl font-bold" id="logtext">หากมีบัญชีอยู่แล้ว？</h3>
                <Link to="/Login">
                    <div className="btn">
                        <button id="login">
                            <span>LOGIN</span>
                        </button>
                    </div>
                </Link>
            </div>
            <div className="image-container">
                <div id="stationery_img"></div>
            </div>
        </div>
    );
};

export default Home;
