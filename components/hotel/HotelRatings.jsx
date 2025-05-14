import { getHotelRatings } from "@/database/queries";


const HotelRatings =async({id}) => {
    const ratings = await getHotelRatings(id)


    const getRatingDescription =(avgRating)=>{

       if (avgRating === 0) {
            return " Ratings Available";
          } else if (avgRating > 0 && avgRating <= 2) {
            return "Poor";
          } else if (avgRating > 2 && avgRating <= 3) {
            return "Average";
          } else if (avgRating > 3 && avgRating <= 4) {
            return "Good";
          } else if (avgRating > 4) {
            return "Very Good";
          }
    }


     let  avgRating = 0

    if(ratings.length === 1){
       avgRating = ratings[0].rating
    }

    if(ratings.length > 1){
         avgRating =ratings.reduce((item,currentVaue)=>{
            return item.rating + currentVaue
         }) / ratings.length
    }

    return (
       <>
       <div className="w-[35px] h-[35px]   grid place-items-center font-medium bg-amber-600 text-white rounded">
            {avgRating}
          </div>
          <span className="font-medium text-amber-600 px-2">{getRatingDescription(avgRating)}</span>
          </> 
    );
};

export default HotelRatings;