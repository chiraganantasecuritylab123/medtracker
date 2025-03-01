import Image from "next/image";
import React from "react";

export function FeatureRtl({ title, description, buttonText, image }) {
  return (
    <div className="container mx-auto relative">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full flex flex-col container justify-center text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
          <div
            data-aos="fade-right"
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-950"
          >
            {title}
          </div>
          <p
            data-aos="fade-right"
            className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-[#455c80] pt-8"
          >
            {description}
          </p>
          <button
            data-aos="zoom-in"
            className="rounded-full graient-btn py-3 w-fit px-10 text-white mt-8 text-2xl mx-auto lg:mx-0"
          >
            {buttonText}
          </button>
        </div>
        <div data-aos="fade-left" className=" w-full flex justify-center">
          <div className="relative w-full max-w-[200] flex justify-center">
            <Image
              src={image}
              alt="mobile"
              layout="intrinsic"
              width={700}
              height={550}
              className="rounded-2xl object-contain w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesServices() {
  return (
    <>
      <section className="mt-48">
        <FeatureRtl
          title="Daily Med Tracker"
          description=" Daily Medicine Tracker notifies users when its time to take medicine
            with an alarm, its customizable to the users needs with dates and
            time as well as tracking whether the product is almost fully
            consumed and when it should be filled again."
          buttonText="More Information"
          image="/assets/feature.png"
        />
      </section>
    </>
  );
}

export default FeaturesServices;
