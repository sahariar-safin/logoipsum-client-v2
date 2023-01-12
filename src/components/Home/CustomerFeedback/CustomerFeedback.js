 
import React from "react";
import Slider from "react-slick";
import styles from "./CustomerFeedback.module.css";

const CustomerFeedback = () => {
  const data = [
    {
      id: 1,
      headText: "What our customers are saying",
      text: "Overall I had an excellent experience filing my taxes last minute. As a new client, I highly recommend to prepare your taxes.",
      name: "Shana Davis ",
      designation: "Straus and Giroux",
      image: "/images/Image (2).png",
    },
    {
      id: 2,
      headText: "What our customers are saying",
      text: "Jonathan's dedication to his clients is amazing even after tax season. I'm truly grateful for his financial advice and guidance.",
      name: "Daniel Kahneman",
      designation: "Straus and Giroux",
      image: "/images/Image (2).png",
    },
    {
      id: 3,
      headText: "What our customers are saying",
      text: "This has honestly been the best tax service I have ever experienced. I filed my taxes right from my home and the entire time I had a real person. ",
      name: "Daniel Kahneman",
      designation: "Straus and Giroux",
      image: "/images/Image (2).png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`container  customerFeedback  mt-4 mb-4`}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className={styles.customerInfoMain} key={item.id}>
            <div className={styles.customerImage}>
               <img
                src={item.image}
                width={370}
                height={530}
                alt=""
                className={`img-fluid ${styles.customerImageMain}`}
              />
            </div>
            <div className={styles.customerInfo}>
              <h2>{item.headText}</h2>
              <p>{item.text}</p>
              <h6>{item.name}</h6>
              <h6>{item.designation}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerFeedback;
