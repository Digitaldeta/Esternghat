import React from "react";
import SliderDB from "../../SliderDB";
import SliderCard from "./SliderCard";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderWapper = () => {
  return (
    <>
      <div className="slider-wrapper">
        <Carousel
        responsive={responsive}
        >
          {SliderDB.map((slide, index) => {
            return (
              <SliderCard
                key={index}
                img={slide.image}
                heading={slide.heading}
                description={slide.description}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default SliderWapper;
