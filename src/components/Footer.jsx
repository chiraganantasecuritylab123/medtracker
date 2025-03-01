import Image from "next/image";
import React from "react";

function FooterCart() {
  return (
    <div className="footer-cart md:p-[50px] p-6 py-12 flex items-center justify-between md:mx-auto mx-3 container mt-20">
      <div className="md:w-1/2">
        <h3
          data-aos="fade-right"
          className="lg:text-5xl md:text-3xl text-2xl font-bold mb-[.5em] w-[80%] text-[#0b295a]"
        >
          Take your pharmacy to new heights
        </h3>
        <p
          data-aos="fade-right"
          className="text-[#4b6184] w-[90%] lg:text-2xl md:text-xl text-lg "
        >
          Partner with us today and realise your pharmacy business’s true
          potential.
        </p>
        <button
          data-aos="fade-right"
          className="rounded-full info-btn py-3 w-fit px-10 text-black mt-8 text-2xl mx-auto lg:mx-0"
        >
          {" "}
          View Plans
        </button>
      </div>
      <div className="w-1/2 justify-end hidden md:flex">
        <img
          src="/assets/footerPhone.png"
          alt="Pharmacy Growth"
          className="absolute max-w-full h-auto"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="mx-auto">
      <div className="container relative">
        <div className="gap-4 absolute md:-top-[300px] -top-[100px] w-full">
          <FooterCart />
        </div>
      </div>
      <div className="w-full min-h-[600px] bg-blue-950 lg:pt-48 pt-52">
        <footer className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <Image
                  src="/assets/mt-logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                />
                <div className="flex flex-col-4 gap-5 pt-8 pb-12">
                  <Image
                    src="assets/linkedInIcon.svg"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                  <Image
                    src="assets/instagramIcon.svg"
                    width={45}
                    height={45}
                    alt="logo"
                  />
                  <Image
                    src="assets/facebookIcon.svg"
                    width={45}
                    height={45}
                    alt="logo"
                  />
                  <Image
                    src="assets/xIcon.svg"
                    width={45}
                    height={45}
                    alt="logo"
                  />
                </div>

                <p className="text-white lg:w-[55%] w-[70%] ">
                  Copyright © 2024 PharmAppy. All rights reserved.
                </p>
              </div>

              <div className="lg:mx-auto text-left">
                <h4 className="text-2xl text-white font-semibold mb-7">
                  Pharmacies
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white text-xl">
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className=" text-white text-xl">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className=" text-white text-xl">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className=" text-white text-xl">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:mx-auto text-left ">
                <h4 className="text-2xl text-white font-semibold mb-7">
                  Patients
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white text-xl">
                      I'm a Patient
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className=" text-white text-xl">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className=" text-white text-xl">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:mx-auto text-left">
                <h4 className="text-2xl text-white font-semibold mb-7">
                  Company
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white text-xl">
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className=" text-white text-xl">
                      Privacy Notice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
