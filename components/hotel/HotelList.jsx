import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";
import NoHotelFound from "./NoHotelFound";

const HotelList = async ({ destination, checkin, checkout, category }) => {

  const allHotels = await getAllHotels(destination, checkin, checkout,category);

 

  return (
    <div className="col-span-9">
      <div className="space-y-4">

         
        {
           allHotels.length > 0 ?
        
        allHotels.map((hotel) => (
          <HotelCard key={hotel.id} 
          hotelInfo={hotel} 
          checkin={checkin}
           checkout={checkout}
          />
        )) : <NoHotelFound/>
      
      }
      </div>
    </div>
  );
};

export default HotelList;
