import Image from "next/image";

import styles from "./Card.module.scss";

export default function index(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={props.cardImage} alt="" />
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
