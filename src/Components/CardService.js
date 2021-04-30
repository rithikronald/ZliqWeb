import React from "react";

const CardService = ({ name, image }) => {
  return (
    <div className="service-card">
      <div className="service-vector-container">
        <img src={image} className="service-vector" />
      </div>
      <p className="title">{name}</p>
    </div>
  );
};
export default CardService;
