import BookingCard from "./BookingCard";

const UpComingBooking = ({bookings}) => {
    return (
        <div className="space-y-4">
        <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>
  
        <div className="bg-[#F6F3E9] p-4 rounded-md">
           {bookings &&
                  bookings.length > 0 &&
                  bookings.map((booking) => {
                    <div key={booking.d} className="bg-[#ebf6e9] p-4 rounded-md">
                      <BookingCard
                        hotelId={booking.hotelId}
                        checkin={booking.checkin}
                        checkout={booking.checkout}
                      />
                    </div>;
                  })}
        </div>
      </div>
    );
};

export default UpComingBooking;