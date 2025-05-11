import mongoose from "mongoose";

export async function dbConnect  (){
    try{
        const conn = await mongoose.connect(String(process.env.MONGOOSE_CONNECTOR))
        return conn ;

    }catch(err){
        throw err ;
    }
}