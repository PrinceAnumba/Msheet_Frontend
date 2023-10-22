import Preloader from './components/PreLoader'
import Image from 'next/image'
import WlcImg from '../../public/images/wlcimg.png'
import Link from 'next/link'


export default function Home() {
  return <>
    <Preloader />

    <div className="h-screen flex ">
      <div className='bg-[url("../../public/images/wlcimg.png")] bg-no-repeat bg-cover h-screen w-1/2 object-contain object-center overflow-hidden'>
        {/* <Image src={WlcImg} style={{ objectFit: "contain", overflow: "hidden" }} alt='wlc-image ' /> */}

      </div>
      <div className='w-1/2 overflow-hidden p-8 flex flex-col justify-center gap-4'>
        <div className='flex flex-col justify-center gap-4 max-w-xl'>         <h5>Welcome To</h5>
          <h1>Master Sheet</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Elit ullamcorper sed sed
            mattis. Varius hendrerit eget et in sed tellus netus lectus massa.
            Quam est massa fames consequat. Pellentesque ullamcorper
            tristique duis quam turpis. Morbi aliquet sollicitudin elementum a
            metus sagittis nulla facilisis. Nisi eget est odio adipiscing mattis
            luctus diam et consectetur.</p>

            <div className="flex flex-col justify-center gap-4">
              <Link href='/auth/login'><button className='w-full bg-primary text-white rounded p-4 text-base'>Log In</button></Link>
              <Link href='/auth/signup'><button className='w-full sign-up-btn rounded p-4 text-base'>Sign Up</button></Link>
            </div>
        </div>
      </div>
    </div>
  </>
}