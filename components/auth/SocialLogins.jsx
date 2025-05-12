'use client'

import { signIn } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({mode}) => {

  
  const handleAuthLogin =(e)=>{
    signIn('google',{callbackUrl:'http://localhost:3000/bookings'})
  }

  const handleAuthByFb =(e)=>{
    signIn('facebook',{callbackUrl:'http://localhost:3000'})
  }
    return (
        <>
        <div className="text-center text-xs text-gray-500">
         
            {
              mode === "register"  ? (<Link href="/login" className="underline text-md">Signin</Link>) :(<Link href="/register" className="underline text-md">Register</Link>)
            }  or Signup with
          </div>
        <div className="flex gap-4">
          <button  onClick={handleAuthByFb} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="https://img.freepik.com/premium-photo/facebook-logo_1080029-107.jpg?semt=ais_hybrid&w=740" alt="facebook" width={40} height={40} />
            <span>Facebook</span>
          </button>
          <button 
             onClick={handleAuthLogin}
           className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="https://cdn-icons-png.freepik.com/256/2702/2702602.png?semt=ais_hybrid" alt="google" width={40} height={40} />
            <span>Google</span>
          </button>
        </div>
      </>
    );
};

export default SocialLogins;