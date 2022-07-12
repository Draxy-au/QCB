import Image from "next/image";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

import styles from "./Homepage.module.scss";

import img1 from "../../images/temp/card_1.jpg";

import slide_1 from "../../assets/slides/slide-1.png";
import slide_2 from "../../assets/slides/slide-2.png";
import slide_3 from "../../assets/slides/slide-3.png";
const slides = [slide_1, slide_2, slide_3];

export default function Homepage() {
  return (
    <div className={styles.homepage_container}>
      <Navbar current={"home"} />
      <div className={styles.content}>
        <div className={styles.carouselArea}>
          <Carousel
            slides={slides}
            indicators
            controls
            interval={4000}
            autoPlay={true}
            width={1100}
          />
        </div>
        <div className={styles.cardArea}>
          <Card
            cardImage={img1}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />

          <Card
            cardImage={img1}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
          <Card
            cardImage={img1}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
        </div>
      </div>
    </div>
  );
}
