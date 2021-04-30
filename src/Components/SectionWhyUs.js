import React from "react";
import CardWhyUs from "./CardWhyUs";
import mobile from "../images/mobile.svg";

const SectionWhyUs = () => {
  return (
    <div className="section-why-us">
      <div className="header">Why us?</div>
      <hr className="header-line" />

      <div className="service-keynote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet
        iusto dicta ut modi itaque velit veritatis vero, tenetur officia?
        Doloribus harum praesentium veniam, quas consectetur ut asperiores
        perferendis omnis?
      </div>

      <div className="keynote-container">
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
        <CardWhyUs content={"Lorem ipsum"} image={mobile} />
      </div>
    </div>
  );
};
export default SectionWhyUs;
