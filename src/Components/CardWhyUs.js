import React from "react";

const CardWhyUs = ({ content, image }) => {
  return (
    <div className="keynote-card">
      <div className="keynote-vector-container">
        <img src={image} />
      </div>
      <p className="title">{content}</p>
    </div>
  );
};
export default CardWhyUs;
