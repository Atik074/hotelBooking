
import { bookingModel } from "@/models/bookings-model"
import { dbConnect } from "@/service/mongoConnect"
import mongoose from "mongoose"
import {NextRequest, NextResponse } from "next/server"

 export const POST  =async(request)=>{
    const {hotelId , userId,checkin,checkout} = await request.json()

       await dbConnect()

    const payload ={
        hotelId:new mongoose.Types.ObjectId(hotelId ),
        userId:new mongoose.Types.ObjectId(userId),
        checkin ,
        checkout

    }
 console.log(payload)

    try{
        await bookingModel.create(payload)
         return new NextResponse( "A new booking is confirmed",{
            status:201
        })
    }catch(err){
        return new NextResponse(err.message ,{
            status:500
        })
    }

}

