import React from "react";
import SectionFirst from "./SectionFirst";
import SectionServices from "./SectionServices";
import SectionWhyUs from "./SectionWhyUs";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="main-page">
      <SectionFirst />
      <SectionServices />
      <SectionWhyUs />
      <Footer />
    </div>
  );
};
export default Main;
