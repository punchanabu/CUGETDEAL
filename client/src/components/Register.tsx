import React from "react";
import {useState} from "react"
export default function Register() {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    

    return (
        <main className="flex justify-center items-center h-screen bg-form font-bold">
            <form className="flex flex-col space-y-5 bg-pink-200 p-10 bg-white font-mono rounded-xl text-red-300 border-solid border-2 border-red-300 justify-center">
                <h1 className = "text-3xl font-bold ">ลงทะเบียน CUGETDEAL</h1>
                <div className= "flex space-x-5">
                    <div className="flex flex-col">
                        <label htmlFor = "name">ชื่อจริง</label>
                        <input id = "name" type = "text" name = "name" className="p-3 rounded-xl border-solid border-2 border-red-300 "/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor = "surname">นามสกุล</label>
                        <input type = "text" name = "surname"  className="p-3 rounded-xl border-solid border-2 border-red-300"/>
                    </div>
                </div>
                <div>
                    <label htmlFor = "email">email</label>
                    <input type = "email" name = "email" className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type = "password" name = "password" className="p-3 rounded-xl border-solid border-2 border-red-300 w-full text-red-300"/>
                </div>
                <button type = "submit" className="rounded-xl w-1/2 p-3 bg-red-300 text-white text-center self-center">Submit</button>
            </form>
        </main>
    )
}