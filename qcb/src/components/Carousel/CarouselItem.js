import Image from "next/image";

import styles from "./Carousel.module.scss";

export default function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div
      className={styles.carousel_item}
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
    >
      <Image src={slide} alt="" height={471} width={900} />
    </div>
  );
}
