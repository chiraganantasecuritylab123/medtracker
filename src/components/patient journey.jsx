import React from "react";
import Image from "next/image";

function PatientJourney() {
  const features = [
    "Know exactly what items your patients have requested in advance",
    "Orders straight into your pharmacy’s workflow with zero chasing",
    "Auto reconciliation of orders without lifting a fingers",
  ];
  return (
    <>
      <div className="bg-gradient-to-b to-[#1d2945] from-[#0c1220] rounded-[50px] container mx-auto border-[#2d8fff] border-8">
        <div className="2xl container relative pb-32 overflow-hidden">
          <div className="pt-28 flex justify-start font-poppins">
            <div className="text-white text-start z-20 px-14">
              <div className="flex justify-start">
                <h1
                  data-aos="fade-up"
                  className="lg:text-6xl md:text-4xl text-3xl w-full "
                >
                  Imagine the complete patient journey
                </h1>
              </div>
              <h1
                data-aos="fade-up"
                className="lg:text-5xl md:4xl text-3xl w-full mt-8"
              >
                No need to imagine, it’s here.
              </h1>
              <div data-aos="fade-up" className="flex flex-col">
                {features?.map((e, index) => (
                  <div
                    key={index}
                    className="mt-10 font-normal flex gap-6 items-start"
                  >
                    <div className="aspect-square max-w-10 pt-1">
                      <Image
                        src="/assets/ok.png"
                        width={34}
                        height={30}
                        alt="mobile"
                      />
                    </div>
                    <p className="flex flex-col text-md md:text-xl lg:text-2xl justify-center">
                      {e}
                    </p>
                  </div>
                ))}
                <div data-aos="fade-up" className="mt-16">
                  <div className="text-gray-300 lg:text-3xl md:text-2xl text-xl">
                    In Partnership With
                  </div>
                  <div className="text-white font-bold lg:text-8xl md:text-6xl text-5xl">
                    TITAN
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="absolute -bottom-20 -right-10 z-10"
          >
            <Image
              className="drop-shadow-2xl shadow-white opacity-30 xl:opacity-100"
              src="/assets/repeatCard.png"
              width={550}
              height={600}
              alt="mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientJourney;
