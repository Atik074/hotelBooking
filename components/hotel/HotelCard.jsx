import Image from "next/image";
import HotelSummeryInfo from "./HotelSummeryInfo";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-68x7J0X2V0V2au7U0_9iJgTeWz0xEJGHl49mFD97iW7S0Lw0iuvOB45Yki8ojV206ac&usqp=CAU"
        width={820}
        height={720}
        className="max-h-[162px] max-w-[240px]"
        alt=""
      />
      <HotelSummeryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
