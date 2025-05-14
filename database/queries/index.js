import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/ratings-model";
import { reviewModel } from "@/models/reviews-model";
import { replaceMongoIdArray, replaceMongoIdObj } from "@/utils/data-util";

export async function getAllHotels() {

    try{
       const hotels = await hotelModel.find().select([
        "thumbNailUrl" ,
        "name" ,
        "highRate",
        "lowRate" , 
        "city" ,
        "propertyCategory"
]).lean()
        return replaceMongoIdArray(hotels) ;
    }catch(error){
        throw error ;
    }
    
}
export async function getHotelById(hotelId) {

    try{
       const hotel = await hotelModel.findById(hotelId).lean()
        return replaceMongoIdObj(hotel);
    }catch(error){
        throw error ;
    }
    
}

export async function getHotelRatings(hotelId){

 const ratings = await ratingModel.find({hotelId:hotelId}).lean()

 return replaceMongoIdArray(ratings)

}

export async function getHotelReviews(hotelId){
    const reviews = await  reviewModel.find({hotelId:hotelId}).lean()

    return replaceMongoIdArray(reviews)
}