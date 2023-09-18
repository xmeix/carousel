import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemscount = 4;
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - itemscount;
    } else if (newIndex >= items.length - itemscount + 1) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${(activeIndex * 100) / itemscount}%)`,
        }}
      >
        {items.map((e, i) => (
          <CarouselItem id={e} key={i} width={100 / itemscount + "vw"} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={() => updateIndex(activeIndex - 1)}>arrow-left</button>
        <div className="indicators"></div>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          arrow-right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
