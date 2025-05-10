import Image from "next/image";


const HotelGallery = () => {
    return (
        <section className="container">
        <div className="grid grid-cols-2 imageshowCase">
        <Image
      src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          
  
          <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
         
          <Image
      src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          <Image
      src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          <Image
      src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          <Image
      src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
           
          </div>
        </div>
      </section>
    );
};

export default HotelGallery;