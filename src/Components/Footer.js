import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div id="address">
        <h3>Mail us</h3>
        <a href="mailto:thezliq@gmail.com">thezliq@gmail.com</a>
        <h3>Our Office</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          tempora rerum nihil.
        </p>
        <h3>Call</h3>
        <a href="tel:+912929929292">+912929929292</a>
      </div>
      <div id="social-media-links">
        <h3>Catch us on</h3>
        <div id="links">
          <a href="#" className="fa fa-facebook" target="_blank">
            <span>Facebook</span>
          </a>
          <a href="#" className="fa fa-instagram" target="_blank">
            <span>Instagram</span>
          </a>
          <a href="#" className="fa fa-twitter" target="_blank">
            <span>Twitter</span>
          </a>
          <a href="#" className="fa fa-linkedin" target="_blank">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div id="google-map">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.47388557594!2d76.89719425617638!3d11.011701573367942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1578994007281!5m2!1sen!2sin"></iframe> */}
      </div>
    </section>
  );
};
export default Footer;
