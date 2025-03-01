import React from "react";

function Protecting() {
  return (
    <>
      <section>
        <div className="bg-[#f1f7fc]">
          <div className="2xl container">
            {/* <Header /> */}
            <div className="pt-20 flex justify-center font-poppins font-semibold">
              <div className="text-white text-center ">
                <div className="flex justify-center">
                  <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="lg:text-5xl md:text-4xl text-3xl font-bold w-[70%] text-blue-950"
                  >
                    We Care About Protecting Your Data
                  </h1>
                </div>
                <div
                  data-aos="fade-up"
                  className="mt-12 text-[#4a6184] w-[85%] font-normal mx-auto lg:text-2xl md:text-xl text-lg"
                >
                  <p>
                    PharmAppy® is committed to protecting your privacy and data.
                    Adequate due diligence has been carried out to ensure that
                    our databases are safe and secure.
                  </p>
                  <p
                    data-aos="fade-up"
                    className="mt-10 md:pb-[750px] pb-[200px]"
                  >
                    We are GDPR compliant and registered with the Information
                    Commissioners Office (ICO).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Protecting;
