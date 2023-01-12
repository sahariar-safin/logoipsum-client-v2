import React from "react";
import image from "../../assets/images/Locations/location.png";
import image2 from "../../assets/images/Locations/mini-figure-traveler-with-red-pushpin-map-travel-concept.jpg";
import styles from "./Locations.module.css";

const LocationsHero = () => {
  return (
    <div className={styles.LocationsHero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
            <div className={styles.heroText}>
               <img
                width="55"
                height="75"
                src={image}
                className="img-fluid"
                alt=""
              />
              <h2>
                {" "}
                <span>Find</span> one of our Trusted Tax Partners today!
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.heroImg}>
               <img
                width="4896"
                height="3264"
                src={image2}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsHero;
