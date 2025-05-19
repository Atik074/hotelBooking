import Image from "next/image";
import HotelSummeryInfo from "./HotelSummeryInfo";

const HotelCard = ({hotelInfo ,checkin, checkout}) => {

   
   
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.
thumbNailUrl}
        width={500}
        height={160}
        
        alt={hotelInfo?.name}
      />
      <HotelSummeryInfo info={hotelInfo}
       fromListPage={true}
        checkin={checkin}
        checkout={ checkout}
        />
    </div>
  );
};

export default HotelCard;
