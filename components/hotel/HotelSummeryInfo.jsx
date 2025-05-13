const HotelSummeryInfo = ({ fromListPage ,info }) => {
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
          <div className="bg-primary w-[35px] h-[35px]  text-white grid place-items-center font-bold bg-amber-600 rounded-2xl">
            5.3
          </div>
          <span className="font-medium">Very Good</span>
          <span>232 Reviews</span>
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
        <p className=" text-right">Per Night for 3 Rooms</p>
        {fromListPage ? (
          <button className="btn-primary">Details</button>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummeryInfo;
