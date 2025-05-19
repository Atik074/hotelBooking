import { auth } from '@/auth'
import PastBooking from '@/components/user/booking/PastBooking'
import UpComingBooking from '@/components/user/booking/UpComingBooking'
import ProfileInfo from '@/components/user/ProfileInfo'
import { getBookigIdByUser, getUserByEmail } from '@/database/queries'
import { redirect } from 'next/navigation'


const BookingPage=async()=> {
  const session = await auth()

  if(!session){
     redirect('/login')
  }

  const loggedInUser = await getUserByEmail(session?.user?.email)
  const bookings = await getBookigIdByUser(loggedInUser?.id)

  //for past bookings
  const pastBookings = bookings.filter((booking)=>{
          return( (new Date().getTime() > new Date(booking.checkin).getTime()))
  })

  //for upcoming bookings
  const upComingBookings = bookings.filter((booking)=>{
          return(( new Date().getTime() < new Date(booking.checkin).getTime()))
  })



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
                        <PastBooking bookings={pastBookings}/>
                        <UpComingBooking bookings={upComingBookings}/>
                        jjfgjfgj
                    </div>
                </div>
            </section>
    </>
  )
}

export default BookingPage;