import Image from "next/image";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

import styles from "./Homepage.module.scss";

import img1 from "../../images/temp/card_1.jpg";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.carouselArea}>
          <Carousel />
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
