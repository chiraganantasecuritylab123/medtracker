"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel = () => {
  const data = [
    {
      name: "Prabjaudt Channa",
      details: "Superintendent Pharmacist at Priory Pharmacy",
      description:
        "I’ve been impressed by how the app has transformed our pharmacy’s communication with patients. The deep integration with Titan means patients can now follow every step of their prescription journey, significantly reducing the number of phone calls we receive—by an estimated 30%, with this figure continuing to grow as more patients adopt the app. It’s incredibly easy for patients to sign up, and we no longer need to print repeat prescription slips, which has streamlined our processes further.",
      image: "/assets/prabChanna.png",
    },
    {
      name: "Monika Syska-Unger",
      details: "Co-Owner at Pinhoe Pharmacy",
      description:
        "The main benefit for us so far has been that we don’t have to attend to the requests made by our patients in any way outside of our workflow, we just prepare their meds as usual and the notifications happen automatically for patients as soon as the bags are sealed and ready for collection.",
      image: "/assets/monikaSyskaUnger.jpeg",
    },
    {
      name: "Steffan Rhys John",
      details: "Superintendent Pharmacist at Fferyllwyr Llyn Cyf",
      description:
        "The benefits of PharmAppy to both patients and the pharmacy are huge. The deep level integration between PharmAppy and Titan makes everything easier, from creating an account to ordering medicines. What stands out with PharmAppy over other apps is that everything is automated. The pharmacy team do not have to send any manual notifications which is saving us valuable time every day.",
      image: "/assets/steffanJohn.png",
    },
  ];
  return (
    <div className="w-full relative container">
      <div className="lg:text-5xl text-3xl md:text-4xl font-semibold mt-32 text-center text-blue-950 ">
        What Pharmacies Say
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="default-carousel swiper-container"
      >
        {data?.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mt-20">
              <div data-aos="zoom-in" className="flex gap-3 items-center">
                <img
                  src={e?.image}
                  className="rounded-full w-20 aspect-square"
                />
                <div
                  data-aos="zoom-in"
                  className="text-2xl font-semibold text-[#122f5f]"
                >
                  {e?.name}
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="text-2xl font-semibold text-center mt-5 text-[#566b8c]"
              >
                {e?.details}
              </div>
              <div
                data-aos="fade-up"
                className="text-[21px] text-center w-[75%] mb-40 mt-10 text-[#122f5f]"
              >
                {'"'}
                {e?.description}
                {'"'}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-8 lg:justify-start justify-center">
        <button className="swiper-button-prev font-semibold group !p-2 flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !left-5 "></button>

        <button className="swiper-button-next font-semibold group !p-2 flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 "></button>
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperCarousel;
