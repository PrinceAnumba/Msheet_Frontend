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
                        {/* <h6 className=" mx-2 sm:text-sm">We can see you’ve forgotten your password, lets help you fix that.</h6> */}
                    </div>
                </div>
                <div className="flex justify-center items-centter mt-24">
                    <form action="" className='flex flex-col gap-12  my-12'>
                        <h5 className="text-center">
                            We’ve just sent you an <Link className='text-xs text-blue-400' href="/auth/newpass">email</Link> to verify if you are truly the one.
                        </h5>
                        
                        <button className="bg-primary text-white rounded p-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled>Next</button>
                        
                    </form>
                </div>
                
            </div>
        </main>
    )
}