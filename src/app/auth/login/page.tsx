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
                    <div className=' flex  justify-start items-center gap-8 '>
                        <Image className="cursor-pointer" onClick={() => router.back()} src={backBtn} alt="back-btn"/>
                        <h2 className="sm:text-xl">Lets Log you in</h2>
                    </div>
                    <h6 className=" mx-16 sm:text-sm">Welcome Back , You have been missed</h6>
                </div>
                <div className="flex justify-center items-centter mt-24">
                    <form action="" className='flex flex-col gap-4 '>
                        <input className='input' placeholder='Email Address' type="email" name="" id="" />
                        <input className='input' placeholder='Password' type="password" name="" id="" />
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 justify-center"><input type="checkbox" name="" id="" /> <p>Remember me</p></span>
                            <Link className='text-xs text-blue-400' href="/auth/pwdreset">Forgot Password?</Link>
                        </div>
                        <button className="bg-primary text-white rounded p-2 sm:text-sm" type="submit">Login</button>
                        <div className="flex justify-center items-center">
                            <p className=" px-4">Don't have an account? <Link href="/auth/signup" className="text-blue-400">Sign up</Link></p>
                        </div>
                        <div className="decor relative flex justify-center items-center my-8">
                            <hr className="w-3/4" />
                            <p className="absolute bg-white px-4 rounded">Sign In With</p>
                        </div>
                    </form>
                </div>
                <div className="socials flex items-center justify-center gap-12">
                    <Link href='/auth/signup'>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ color: "black", fontSize: 22 }}
                            className='cursor-pointer'
                        />  
                    </Link>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "black", fontSize: 22 }}
                        className='cursor-pointer'
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "black", fontSize: 22 }}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </main>
    )
}