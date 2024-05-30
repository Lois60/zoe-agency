import "./Services.css";
import { MdEmail } from "react-icons/md";
import { IoLaptop } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
export const Services = () => {
  return (
    <section id="services">
      <div className="service-heaader">
        <h1>Our Services</h1>
      </div>
      <div className="service-card">
        <div className="first-card">
          <span className="service-icon">
            {" "}
            <MdEmail />
          </span>
          <h1> Email Marketing</h1>
          <p>
            {" "}
            Creating visually appealing, user-friendly website
            designs.Developing and managing online stores, optimizing for
            conversions.Developing and managing online stores, optimizing for
            conversions.
          </p>
        </div>
        <div className="second-card">
          <span className="service-icon">
            {" "}
            <IoLaptop />
          </span>
          <h1> Web Design and Development</h1>
          <p>
            {" "}
            Creating visually appealing, user-friendly website
            designs.Developing and managing online stores, optimizing for
            conversions.Developing and managing online stores, optimizing for
            conversions.
          </p>
        </div>
        <div className="third-card">
          <span className="service-icon">
            {" "}
            <FaVideo />
          </span>
          <h1>Video Marketing</h1>
          <p>
            {" "}
            Creating engaging videos, including explainer videos, testimonials,
            and product demos.Optimizing videos for search engines and platforms
            like YouTube.Sharing videos across various channels to maximize
            reach.
          </p>
        </div>
      </div>
    </section>
  );
};
