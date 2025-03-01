import Image from "next/image";
import React from "react";

const whyChooseData = [
  {
    title: "Convenience",
    description:
      "Medtracker provides users with convenient access to information about the availability and locations of their desired medications. This can save time and effort in searching for products across different pharmacies.",
    icon: "/assets/infoIcon.svg",
  },
  {
    title: "Real-time Product Availability",
    description:
      "Users can access real-time information on the availability of specific medications or health products in nearby pharmacies. This ensures that users can make informed decisions about where to purchase their needed items.",
    icon: "/assets/infoIcon.svg",
  },
  {
    title: "Efficiency for Pharmacies",
    description:
      "Medtracker's integration with pharmacy systems can improve inventory management, order processing, and overall operational efficiency.",
    icon: "/assets/infoIcon.svg",
  },
  {
    title: "Communication Channels",
    description:
      "Medtracker includeS communication features, allowing users to interact with pharmacies, inquire about product availability, and potentially place orders directly through the platform.",
    icon: "/assets/infoIcon.svg",
  },
];

function WhyChooseCart({ title, description, icon }) {
  return (
    <div className="choos-cart">
      <div>
        <Image src={icon} width={50} height={50} alt={title} />
      </div>
      <h3 className="lg:text-[1.37em] font-bold mb-[.5em] text-[#0b295a] sm:line-clamp-2 line-clamp-1">
        {title}
      </h3>
      <p className="sm:line-clamp-3 line-clamp-1">{description}</p>
    </div>
  );
}
function WhyChoose() {
  return (
    <>
      <section className="bg-[#0B295A] mt-28 lg:pb-0 pb-3">
        {/* <div className='text-center py-12 font-poppins font-semibold'>
          <h2 className='text-[#0B295A] text-5xl'>Why Choose Medtracker</h2>
          <div className='flex justify-center mt-4'>
          <p className='w-[70%]'>Choosing Medtracker as a medication tracking and pharmacy information platform can offer several benefits to both users and pharmacies, Here are some reasons why:</p>
          </div>
          </div> */}
        <div className="container relative">
          <div className="pt-16 lg:pb-[200px] pb-[90px]">
            <div className="flex lg:flex-row flex-col">
              <div className="w-[50%]">
                <h2
                  data-aos="fade-right"
                  className="lg:text-5xl text-3xl text-[#fff] whitespace-nowrap leading-[1.3] font-bold"
                >
                  Why Choose Medtracker
                </h2>
              </div>
              <div className="lg:w-[50%] flex justify-end">
                <p
                  data-aos="fade-left"
                  className="text-[1.3em] text-[rgb(191,200,213)] lg:text-right lg:w-[60%] text-left"
                >
                  Choosing Medtracker as a medication tracking and pharmacy
                  information platform can offer several benefits to both users
                  and pharmacies, Here are some reasons why:
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative overflow-x-auto sm:overflow-visible flex-nowrap sm:grid lg:-bottom-[35%] lg:absolute place-items-center"
          >
            {whyChooseData.map((data, index) => (
              <div key={index} className="w-full flex justify-center">
                <WhyChooseCart
                  title={data.title}
                  description={data.description}
                  icon={data.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
