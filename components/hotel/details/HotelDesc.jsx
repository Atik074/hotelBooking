import HotelSummeryInfo from "../HotelSummeryInfo";

const HotelDesc = () => {
    return (
        <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummeryInfo source="details"/>
      </div>
    </section>
    );
};

export default HotelDesc;