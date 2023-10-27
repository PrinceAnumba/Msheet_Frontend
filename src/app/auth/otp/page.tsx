"use client";

import Image from 'next/image'
import backBtn from '../../../../public/images/back-btn.png'
import topVector from '../../../../public/images/vector-48.png'
import bottomVector from '../../../../public/images/vector1.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import React, { FC, useState, useEffect } from "react";


let currentOTPIndex: number = 0;

export default function Login() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOtpIndex] = useState(0);
    const router = useRouter()

    const inputRef = React.createRef<HTMLInputElement>(null);

    const handleOnChange = ({target,}:React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOTP: string[] = [...otp];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);

        if(!value) setActiveOtpIndex(currentOTPIndex - 1);
        else setActiveOtpIndex(currentOTPIndex + 1);

        setOtp(newOTP);
    }
    const handleOnKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOTPIndex = index;
        if(key === 'Backspace') setActiveOtpIndex(index -1);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex, inputRef]); 

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
                <div className="flex justify-center items-centter mt-12">
                    <form action="" className='flex flex-col gap-12  my-12'>
                        <h5 className="text-center">
                           We’ve just sent you a verification code to your email, type it in the box bellow
                        </h5>

                        <div className="flex justify-center items-center">
                        {otp.map((_, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input
                                        ref={index === activeOTPIndex ? inputRef: null}
                                        type="number"
                                        className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                                        onChange={handleOnChange}
                                        onKeyDown={(e) => handleOnKeyDown(e, index)}
                                        value={otp[index]}
                                    />
                                    {index === otp.length - 1 ? null : (
                                    <span className="w-2 py-0.5 bg-gray-400" />
                                    )}
                                </React.Fragment>
                                );
                        })}
                        </div>
                        
                        <button className="bg-primary text-white rounded p-2 sm:text-sm " type="submit">Verify</button>
                        
                    </form>
                </div>
                
            </div>
        </main>
    )
}