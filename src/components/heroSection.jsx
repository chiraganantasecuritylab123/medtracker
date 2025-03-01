import React from "react";
import Header from "./ui/header";
import Image from "next/image";

function HeroSection() {
  return (
    <>
      <div className="bg-primary overflow-hidden">
        <div className="2xl container">
          <Header />
          <div className="pt-20 flex justify-center font-poppins font-semibold">
            <div className="text-white text-center ">
              <div data-aos="fade-up" className="flex justify-center">
                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold lg:w-[50%]">
                  The patient app actually integrated
                </h1>
              </div>
              <div
                data-aos="fade-up"
                className="mt-12 text-[#BFC8D5] w-[70%] mx-auto font-semibold"
              >
                <p>
                  Medtracker is a covergence of technology and pharmacy
                  landscapes,designed to allow USERS to gain access to
                  information of the availability and locations of their desired
                  product.
                </p>
                <p data-aos="fade-up" className="mt-4">
                  Medtracker empower Pharmacies to embrace the future,
                  opportunities and benefits of Digitalization in the
                  pharmaceutical industry .
                </p>
              </div>
              <div data-aos="fade-up" className="flex justify-center">
                <Image
                  src="/assets/mobile.png"
                  width={1000}
                  height={700}
                  alt="mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
