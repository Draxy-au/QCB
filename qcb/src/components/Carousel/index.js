import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";

import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import Link from "next/link";

export default function Carousel({
  slides,
  links,
  interval = 4000,
  controls = false,
  indicators = false,
  autoPlay = true,
  width = 900,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };
  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel} style={{ maxWidth: width }}>
          <div
            className={styles.carousel_inner}
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {slides &&
              slides.map((slide, index) => (
                <Link key={index} href={links[index]}>
                  <a>
                    <CarouselItem
                      key={index}
                      slide={slide}
                      stopSlide={stopSlideTimer}
                      startSlide={startSlideTimer}
                    />
                  </a>
                </Link>
              ))}
          </div>
          {indicators && (
            <CarouselIndicators
              slides={slides}
              currentIndex={currentSlide}
              switchIndex={switchIndex}
            />
          )}
          {controls && <CarouselControls prev={prev} next={next} />}
        </div>
      </div>
    </>
  );
}
