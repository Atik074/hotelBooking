// app/hotel-list/page.js

import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";

export default async function HotelListPage({ searchParams }) {
    const params = await searchParams;
  const { destination, checkin, checkout } = params || {};
  

  return (
    <>
      {/* Hero section */}
      <section className="bg-[url('https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12">
          <Search
            fromList={true}
            destination={destination}
            checkin={checkin}
            checkout={checkout}
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="container grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Filter />
          </div>
          <div className="col-span-9">
            <HotelList
              destination={destination}
              checkin={checkin}
              checkout={checkout}
            />
          </div>
        </div>
      </section>
    </>
  );
}
