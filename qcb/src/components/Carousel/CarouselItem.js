import Image from "next/image";

import styles from "./Carousel.module.scss";

export default function CarouselItem({
  slide,
  stopSlide,
  startSlide,
  heading,
}) {
  return (
    <div
      className={styles.carousel_item}
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
    >
      {heading && <h1>{heading}</h1>}
      <Image src={slide} alt="" height={471} width={900} />
    </div>
  );
}
