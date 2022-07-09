import styles from "./Carousel.module.scss";

const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <button
        className={`${styles.carousel_control} ${styles.left}`}
        onClick={prev}
      >
        &#8249;
      </button>
      <button
        className={`${styles.carousel_control} ${styles.right}`}
        onClick={next}
      >
        &#8250;
      </button>
    </div>
  );
};

export default CarouselControls;
