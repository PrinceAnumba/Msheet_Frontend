"use client";

import Image from 'next/image'
import backBtn from '../../../../public/images/back-btn.png'
import topVector from '../../../../public/images/vector-48.png'
import { useRouter } from 'next/navigation'



export default function Login() {
    const router = useRouter()

    return (
        <main className="flex justify-center items-center h-screen relative">
            <Image className="absolute top-0 right-0 overflow-hidden" src={topVector} alt="bg-vector" />
            <div className="w-5/6">
                <div className="title">
                    <div className=' flex  justify-start items-center gap-8 '>
                        <Image className="cursor-pointer" onClick={() => router.back()} src={backBtn} alt="back-btn"/>
                        <h2>Who are you?</h2>
                    </div>
                    <h6 className=" mx-16">Help us by telling us which category you fall in</h6>
                </div>
                <div className="flex justify-start items-center mt-24">
                    <form action="" className='grid grid-cols-2 grid-row-6 gap-4 '>
                        <input className='input' placeholder='Email Address' type="text" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <div className="">
                            <button className="bg-primary text-white rounded p-4" type="submit">Login</button>
                        </div>
                    
                    </form>
                </div>
                
            </div>
        </main>
    )
}