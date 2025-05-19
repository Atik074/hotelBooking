import HotelSummeryInfo from "../HotelSummeryInfo";

const HotelDesc = ({hotelInfo,checkin,checkout}) => {
  
    return (
        <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummeryInfo
             info={hotelInfo}
            checkin={checkin}
           checkout={checkout}
         source="details"/>
      </div>
    </section>
    );
};

export default HotelDesc;