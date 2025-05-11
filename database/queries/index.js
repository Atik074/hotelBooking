import { hotelModel } from "@/models/hotels-model";
import { replaceMongoIdArray, replaceMongoIdObj } from "@/utils/data-util";

export async function getAllHotels() {

    try{
       const hotels = await hotelModel.find().lean()
        return replaceMongoIdArray(hotels) ;
    }catch(error){
        throw error ;
    }
    
}
export async function getHotelById(id) {

    try{
       const hotel = await hotelModel.findById(id).lean()
        return replaceMongoIdObj(hotel);
    }catch(error){
        throw error ;
    }
    
}