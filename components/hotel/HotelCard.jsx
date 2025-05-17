import Image from "next/image";
import HotelSummeryInfo from "./HotelSummeryInfo";

const HotelCard = ({hotelInfo ,checkin, checkout}) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.
thumbNailUrl}
        width={200}
        height={160}
        className="max-h-[162px] max-w-[240px]"
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
