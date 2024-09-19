import React from "react";
import Slider from "react-slick";
import ServiceCard from "./serviceCard";
import card1 from "../assets/images/card1_img.png";
import card2 from "../assets/images/card2_img.png";
import card3 from "../assets/images/card3_img.png";

import "../styles/theme/slick.css";
import "../styles/theme/slick-theme.css";

const ServiceCarousel = () => {
  const data = [
    { id: 1, img: card1, title: "Haircut" },
    { id: 2, img: card2, title: "Hair Styling" },
    { id: 3, img: card3, title: "Makeup" },
    { id: 4, img: card1, title: "Tatoo" },
    { id: 2, img: card2, title: "Hair Styling" },
    { id: 3, img: card3, title: "Makeup" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div color="black">
      <Slider {...settings}>
        {data.map((item) => (
          <ServiceCard
            key={item.id}
            src={item.img}
            title={item.title}
            id={item.id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
