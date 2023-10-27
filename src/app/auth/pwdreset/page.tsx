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
            
            <div className="w-5/6">
                <div className="title">
                    <div className=' flex  justify-start items-center  '>
                        <Image className="cursor-pointer" onClick={() => router.back()} src={backBtn} alt="back-btn"/>
                        <h6 className=" mx-2 sm:text-sm">We can see you’ve forgotten your password, lets help you fix that.</h6>
                    </div>
                </div>
                <div className="flex justify-center items-centter mt-24">
                    <div className='flex flex-col gap-12  my-12'>
                        <input className='input' placeholder='Enter a registered Email  Address' type="email" name="" id="" />
                        
                        <Link className='w-full' href="/auth/checkmail"><button className="bg-primary text-white w-full rounded p-2 sm:text-sm" type="submit">Next</button></Link>
                        
                    </div>
                </div>
                
            </div>
        </main>
    )
}