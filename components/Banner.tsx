import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://i.ibb.co/zNMqmQ3/57b9f708-bb12-498c-bc33-769f8fc43e63.webp"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-lg">Not show where to go? Pefect</p>
        <button className="text-purple-500 rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 px-10 py-4 shadow-md bg-white">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
