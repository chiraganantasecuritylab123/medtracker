import Image from "next/image";
import React from "react";

export function OrderRtl({ title, description, buttonText, image }) {
  return (
    <div className="container relative mx-auto">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            data-aos="fade-right"
            className="relative w-full max-w-[750px] flex justify-center"
          >
            <Image
              src={image}
              alt="mobile"
              layout="intrinsic"
              width={750}
              height={600}
              className="rounded-2xl object-contain w-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center text-center lg:text-left max-w-[700px]">
          <div
            data-aos="fade-left"
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-blue-950 mt-3"
          >
            {title}
          </div>
          <p
            data-aos="fade-left"
            className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-[#455c80] pt-4"
          >
            {description}
          </p>
          <button
            data-aos="zoom-in"
            className="rounded-full info-btn py-3 w-fit px-10 text-black mt-8 text-2xl mx-auto lg:mx-0"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
function Order() {
  return (
    <>
      <section>
        <OrderRtl
          title="Order"
          description=" Convenient and user friendly interface for ordering drugs and
            products online, users can order medicine from the nearest pharmacy
            with the available desired products"
          buttonText="More Information"
          image="/assets/orderImage.png"
        />
      </section>
    </>
  );
}

export default Order;
