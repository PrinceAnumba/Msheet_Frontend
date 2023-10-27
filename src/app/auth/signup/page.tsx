"use client";

import Image from 'next/image'
import backBtn from '../../../../public/images/back-btn.png'
import topVector from '../../../../public/images/vector-48.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



export default function Login() {
    const router = useRouter()
    return (
        <main className="flex justify-center items-center xl:h-screen md:h-full relative">
            <Image className="absolute top-0 right-0 overflow-hidden" src={topVector} alt="bg-vector" />
            <div className="w-5/6 sm:my-12">
                <div className="title">
                    <div className=' flex  justify-start items-center gap-8 '>
                        <Image className="cursor-pointer" onClick={() => router.back()} src={backBtn} alt="back-btn"/>
                        <h2 className="sm:text-xl">Who are you?</h2>
                    </div>
                    <h6 className=" mx-16 sm:text-sm">Help us by telling us which category you fall in</h6>
                </div>
                <div className="flex xl:justify-start md:justify-center items-center xl:mt-24 sm:mt-8">
                    <form action="" className='grid xl:grid-cols-2 grid-row-6 md:grid-cols-5 gap-4 sm:grid-cols-1'>
                        <input className='input' placeholder='School Name' type="text" name="" id="" />
                        <input className='input' placeholder='School Email' type="email" name="" id="" />
                        <input className='input' placeholder='School Location' type="text" name="" id="" />
                        <input className='input' placeholder='Country' type="text" name="" id="" />
                        <input className='input' placeholder='Region' type="text" name="" id="" />
                        <input className='input' placeholder='City' type="text" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <input className='input' placeholder='Confirm Password' type="password" name="" id="" />
                        <div className="">
                            <button className="bg-primary text-white rounded w-full p-2 sm:text-sm" type="submit">Sign Up</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-red-600">You have an account already ? <Link href="/auth/login" className="text-blue-400">Sign in</Link></p>
                        </div>
                    
                    </form>
                </div>
                
            </div>
        </main>
    )
}