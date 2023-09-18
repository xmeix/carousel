import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="carousel">
      <div className="inner">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;
