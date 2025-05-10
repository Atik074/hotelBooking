import HotelDesc from "@/components/hotel/details/HotelDesc";
import HotelGallery from "@/components/hotel/details/HotelGallery";
import HotelOverView from "@/components/hotel/details/HotelOverView";


export default function hotelDetailsPage() {
  return (
    <>
      <HotelDesc/>
      <HotelGallery />
      <HotelOverView />
    </>
  );
}
