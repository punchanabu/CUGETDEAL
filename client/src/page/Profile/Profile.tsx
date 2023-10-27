import React from 'react'

const Profile = () => {
  return (
    <main className="h-screen bg-form font-bold">
      {/* div 1 หัวข้อ */}
      <div className="flex justify-center items-center bg-zinc-50">
        <h1 className="text-3xl font-bold p-5">โปรไฟล์ของฉัน</h1>
      </div>

      {/* div 2  */}
      <div className="flex justify-center items-center  bg-zinc-50">
        <span className="w-screen m-2 p-2 border-2 flex justify-center items-center rounded-md">
          <h2>สรุปงาน</h2>
        </span>
        <span className="w-screen m-2 p-2 border-2 flex justify-center items-center rounded-md">
          <h2>แก้ไขโปรไฟล์</h2>
        </span>
      </div>
      

      {/* รายละเอียด person */}

      <div className="h-max m-2 p-2 border-2 rounded-md bg-zinc-50">
        <div>
          <h3>KINK PAPAWIN</h3>
          <p>ที่อยู่</p>
          <p>อีเมล</p>
          <p>โทร</p>
          <p>ทวิต</p>
          <p>ig</p>
        </div>
      </div>
      {/* ประวัติการทำงาน */}
      <div className="m-2 p-2 border-2 rounded-md bg-zinc-50">
        <h3>ประวัติการทำงาน</h3>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
      </div>
      {/* ข้อมูลการศึกษา */}
      <div className="m-2 p-2 border-2 rounded-md bg-zinc-50">
        <h3>ข้อมูลการศึกษา (เพิ่มเติม)</h3>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
      </div>
      {/* ประกาศนียบัตร */}
      <div className="m-2 p-2 border-2 rounded-md bg-zinc-50">
        <h3>ภาษา (เพิ่มเติม)</h3>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
      </div>
      {/* ภาษา */}
    </main>
  )
}

export default Profile