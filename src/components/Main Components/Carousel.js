import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselComponent({ data }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} infinite={true} showDots={true}>
        {data.map((item, index) => {
          return (
            <img
              key={index}
              alt="content"
              className="px-10 md:px-14 xl:px-20"
              src={item.image}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
