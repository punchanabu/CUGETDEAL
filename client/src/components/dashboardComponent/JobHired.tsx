import React from 'react'

interface JobData {
    title: string,
    description: string,
    star: number,
    status: string
}

interface JobHiredProps {
    jobData: JobData
}
let fakeIsFinsh = false;


const JobHired: React.FC<JobHiredProps> = ({jobData}) => {
  return (
    <figure>
        <section className='flex justify-between'>
            <div>
                <h3>{jobData.title}</h3>
                <p>{jobData.description}</p>
                <p>คะแนน: {jobData.star}</p>
            </div>
            <div>
                <button className='bg-red-300'>ติดตามการทำงาน</button>
                {fakeIsFinsh && <button>กดเพื่อเสร็จสิ้นงาน</button>}
            </div>
        </section>
        <section className='flex space-x-5'>
            <p>ได้รับงาน</p>
            <p>ดำเนินงาน</p>
            <p>ตรวจสอบงาน</p>
            <p>ส่งมอบเสร็จสิ้น</p>
        </section>
    </figure>
  )
}

export default JobHired