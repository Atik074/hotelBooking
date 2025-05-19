import Link from "next/link";
import HotelRatings from "./HotelRatings";
import HotelReviewNumber from "./HotelReviewNumber";

const HotelSummeryInfo = ({ fromListPage ,info,checkin,checkout }) => {

 
  let  params = ""
   
  if(checkin && checkout){
     params =`?checkin=${checkin}&checkout=${checkout}`
  }


  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-[23px]" : "font-bold text-2xl"}
        >
        {info?.name}
        </h2>
        <p className="text-[16px]">📍 {info?.city}</p>
        <div className="flex gap-2 items-center my-4">
         <HotelRatings id={info?.id}/>
          <HotelReviewNumber id={info?.id}/>
          {info?.isBooked && <span className="underline text-red-700 text-[18px] font-semibold "> booked</span>}
       
        </div>
          <div>
            <span className="bg-amber-500 p-1 text-[17px] rounded">{info?.
propertyCategory} star Property</span>
          </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${
        (info?.highRate + 
       info?.lowRate)/2}/night
</h2>
        <p className="text-right">Per Night for 3 Rooms</p>
        {fromListPage ? (
          <Link href={`/hotels/${info?.id}${params}`} className="btn-primary">Details</Link>
        ) : (
          <Link  href={info?.isBooked ? "#" : `/hotels/${info?.id}/payment${params}`}  className={info?.isBooked ? "btn-disabled" : "btn-primary "}>Book</Link>
        )}
      </div>
    </>
  );
};

export default HotelSummeryInfo;
