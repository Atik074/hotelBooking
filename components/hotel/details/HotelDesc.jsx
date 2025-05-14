import HotelSummeryInfo from "../HotelSummeryInfo";

const HotelDesc = ({hotelInfo}) => {
    return (
        <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummeryInfo
            info={hotelInfo}
         source="details"/>
      </div>
    </section>
    );
};

export default HotelDesc;