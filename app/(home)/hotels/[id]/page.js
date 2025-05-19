import HotelDesc from "@/components/hotel/details/HotelDesc";
import HotelGallery from "@/components/hotel/details/HotelGallery";
import HotelOverView from "@/components/hotel/details/HotelOverView";
import { getHotelById } from "@/database/queries";



const hotelDetailsPage =async({params, searchParams})=> {
   const {id} = await params
   const  { checkin, checkout } = await searchParams
   

  const hotelInfo = await getHotelById(id ,checkin,checkout)

  return (
    <>
      <HotelDesc 
          hotelInfo={hotelInfo}
       checkin={checkin}
        checkout={checkout} />
      <HotelGallery galleryImages={hotelInfo?.gallery} />
      <HotelOverView overView={hotelInfo?.overview}/>
    </>
  );
}


export default hotelDetailsPage;