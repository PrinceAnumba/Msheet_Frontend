"use client";

import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import Image from 'next/image'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="bg-primary preloader w-screen h-screen flex items-center justify-center">
      <div className="texts-container">
       <span> <Image src='/images/mastersheetround.png' width={100} height={100} alt='msheet-logo'/></span>
      </div>
    </div>
  );
};

export default PreLoader;