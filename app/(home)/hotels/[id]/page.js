import HotelDesc from "@/components/hotel/details/HotelDesc";
import HotelGallery from "@/components/hotel/details/HotelGallery";
import HotelOverView from "@/components/hotel/details/HotelOverView";
import { getHotelById } from "@/database/queries";


const hotelDetailsPage =async({params:{id}})=> {
  const hotelInfo = await getHotelById(id)

  return (
    <>
      <HotelDesc hotelInfo={hotelInfo}/>
      <HotelGallery galleryImages={hotelInfo?.gallery} />
      <HotelOverView overView={hotelInfo?.overview}/>
    </>
  );
}


export default hotelDetailsPage;