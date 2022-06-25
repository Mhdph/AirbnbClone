import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://i.ibb.co/zNMqmQ3/57b9f708-bb12-498c-bc33-769f8fc43e63.webp"
        layout="fill"
        objectFit="cover"
        alt="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button type="button" className="button">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
