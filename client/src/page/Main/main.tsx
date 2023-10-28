import React from "react"
import "./style.css"
export default function MainContent() {
    return (
    <main className="h-screen bg-form font-bold">
    <div className = "topzone">
        <div className="itemtext">
            <h1>หาคนทำงานอยู่หรือเปล่า?</h1>
            <h1>กดสร้างงานเลย?</h1>
        </div>
        <button>สร้างงาน</button>
    </div>

    <div className = "findzone">
        <div className = "headerfind">
            <p>ค้นหางาน</p>
        </div>
        <div className = "findbar">
            <input type="textinput"></input>
            <button className = "findfilter">เวลา</button>
        </div>
    </div>

    <div className="listperson">
        <div className = "eachperson">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>etec.</p>
            <button className="moredetail">ข้อมูลเพิ่มเติม</button>
        </div>
    </div>

    <div className = "endcredit">
        <h1>CUGETDEAL</h1>
        <p>Mauris at ultricies est, vel feugiat nibh. Vivamus et commodo dui. Proin
a ultricies chim. Duis arcaturpis, Taciss non ventua semper, cuismod</p>
        <p>All Right Reserved | Designed By CUGETDEAL</p>
    </div>
    </main>
    )
}

