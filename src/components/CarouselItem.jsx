import "./CarouselItem.css";
const CarouselItem = ({ id, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      Item {id}
    </div>
  );
};

export default CarouselItem;
