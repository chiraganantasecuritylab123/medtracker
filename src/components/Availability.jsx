import Image from "next/image";
import React from "react";
import { OrderRtl } from "./order";

function Availability() {
  return (
    <>
      <section className="pb-20">
        <OrderRtl
          title="Availability Locator"
          description="Find out where to find the medicine and food products could be
                found, with Medtracker’s partner merchants, users can now find
                the availability of medicine with just a click on their phone."
          buttonText="More Information"
          image={"/assets/availability.jpg"}
        />
      </section>
    </>
  );
}

export default Availability;
