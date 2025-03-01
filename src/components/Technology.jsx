import React from "react";

export function TrustedTechnology({ title, description }) {
  return (
    <div className="bg-[#f1f7fc]">
      <div className="2xl container  mx-auto">
        {/* <Header /> */}
        <div className="pt-20 flex justify-center font-poppins font-semibold">
          <div className="text-white text-center ">
            <div className="flex justify-center">
              <h1
                data-aos="fade-up"
                className="lg:text-5xl md:text-4xl text-3xl font-bold w-[50%] text-blue-950"
              >
                {title}
              </h1>
            </div>
            <div
              data-aos="fade-up"
              className="mt-12 text-[#4a6184] lg:w-[70%] w-[40%] font-normal mx-auto lg:text-2xl md:text-xl text-lg"
            >
              <p>{description}</p>
            </div>
            <div className="flex justify-between md:px-80 md:py-28 py-10 gap-5 px-10">
              <div
                data-aos="zoom-in"
                className="text-[#005eb8] font-bold font-sans lg:text-9xl md:text-7xl text-5xl my-7"
              >
                NHS
              </div>
              <div
                data-aos="zoom-in"
                className="text-[#005eb8] font-bold font-sans  lg:text-9xl md:text-7xl text-5xl my-7"
              >
                IM1
              </div>
            </div>
            <hr
              style={{ border: "1.5px solid #d9e1ec" }}
              className="lg:w-[100%] w-[72%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Technology() {
  return (
    <>
      <section>
        <TrustedTechnology
          title="Trusted Technology"
          description="PharmAppy is NHS approved and integrated. Our NHS login and
            IM1 pairings allow you to securely access your medication
            record and order direct to your GP surgery. The most up to
            date form of data, made efficiently accessible."
        />
      </section>
    </>
  );
}

export default Technology;
