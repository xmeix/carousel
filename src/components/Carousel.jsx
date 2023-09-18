import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the second item
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const updateIndex = (newIndex) => {
    if (newIndex < 1) {
      newIndex = items.length - 4; // Adjust for showing 3 items at a time
    } else if (newIndex >= items.length - 3) {
      newIndex = 0; // Adjust for showing 3 items at a time
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 25}%)` }}
      >
        {items.map((e, i) => (
          <CarouselItem id={e} key={i} />
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
