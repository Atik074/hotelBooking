import PastBooking from '@/components/user/booking/PastBooking'
import UpComingBooking from '@/components/user/booking/UpComingBooking'
import ProfileInfo from '@/components/user/ProfileInfo'


export default function BookingPage() {
  return (
    <>
      <section className="mt-[100px]">
                <div className="container">
                    <ProfileInfo/>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking />
                        <UpComingBooking/>
                    </div>
                </div>
            </section>
    </>
  )
}
