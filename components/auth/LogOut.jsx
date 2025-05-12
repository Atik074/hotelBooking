'use client'
import { signOut } from "next-auth/react";

const LogOut = () => {
    return (
        <button 

             onClick={()=>signOut({callbackUrl:"http://localhost:3000/login"})}
         className=" text-[20px] p-2 rounded mr-2">
            SignOut
        </button>
    );
};

export default LogOut;