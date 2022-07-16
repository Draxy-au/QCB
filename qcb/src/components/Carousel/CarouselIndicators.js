import styles from "./Carousel.module.scss";

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className={styles.carousel_indicators}>
      {slides.map((_, index) => {
        return (
          <button
            key={index}
            className={`${styles.carousel_indicators_item} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => switchIndex(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default CarouselIndicators;
