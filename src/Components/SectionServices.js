import React from "react";
import CardService from "./CardService";
import mobile from "../images/mobile.svg";

const SectionServices = () => {
  return (
    <div className="section-services">
      <div className="header">What we offer</div>
      <hr className="header-line" />

      <div className="service-keynote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet
        iusto dicta ut modi itaque velit veritatis vero, tenetur officia?
        Doloribus harum praesentium veniam, quas consectetur ut asperiores
        perferendis omnis?
      </div>

      <div className="services-container">
        <CardService name="App Development" image={mobile} />
        <CardService name="App Development" image={mobile} />
        <CardService name="App Development" image={mobile} />
        <CardService name="App Development" image={mobile} />
        <CardService name="App Development" image={mobile} />
        <CardService name="App Development" image={mobile} />
      </div>
    </div>
  );
};
export default SectionServices;
