import Image from "next/image";
import React from "react";
import { FeatureRtl } from "./featuresServices";

function Deliver() {
  return (
    <>
      <section className="lg:pt-0 pt-8">
        <FeatureRtl
          title="Deliver"
          description="Have your medicine and food products delivered online, choose your desired products and check out from the app"
          buttonText="More Information"
          image="/assets/deliverImage.jpg"
        />
      </section>
    </>
  );
}

export default Deliver;
