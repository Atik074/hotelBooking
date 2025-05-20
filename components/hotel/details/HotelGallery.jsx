import Image from "next/image";

const HotelGallery = ({ galleryImages }) => {

  const newGallery = [...galleryImages];
  newGallery.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={galleryImages[0]} width={400} height={300} alt="main_pic" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
           {
            newGallery.map((image,i) => (
              <Image
                key={i}
                src={image}
                alt="Sub Pics"
                width={400}
                height={300}
                />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default HotelGallery;
