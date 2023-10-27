"use client";

import Image from 'next/image'
import backBtn from '../../../../public/images/back-btn.png'
import topVector from '../../../../public/images/vector-48.png'
import bottomVector from '../../../../public/images/vector1.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"



export default function Login() {
    const router = useRouter()

    return (
        <main className="flex justify-center items-center h-screen relative">
            <Image className="absolute top-0 right-0 overflow-hidden" src={topVector} alt="bg-vector" />
            <Image className="absolute bottom-0 left-0 overflow-hidden -z-10" src={bottomVector} alt="bg-vector2" />
            <div className="w-5/6">
                <div className="title">
                <div className="title">
                    <div className=' flex  justify-start items-center gap-8 '>
                        <Image className="cursor-pointer" onClick={() => router.back()} src={backBtn} alt="back-btn"/>
                        <h2 className="sm:text-xl">Input your new password</h2>
                    </div>
                    <h6 className=" mx-16 sm:text-sm">Try typing what you know you can Remember.</h6>
                </div>
                </div>
                <div className="flex justify-center items-centter mt-16">
                    <div className='flex flex-col gap-4  my-12'>
                        <input className='input' placeholder='New Password' type="password" name="" id="" />
                        <input className='input' placeholder='Confirm Password'  type="password" name="" id="" />
                        
                        <Link className='w-full my-8' href="/auth/checkmail"><button className="bg-primary text-white w-full rounded p-2 sm:text-sm" type="submit">Save</button></Link>
                        
                    </div>
                </div>
                
            </div>
        </main>
    )
}