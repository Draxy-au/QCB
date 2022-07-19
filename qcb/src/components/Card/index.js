import Image from "next/image";

import styles from "./Card.module.scss";

export default function index(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={props.cardImage} alt="" height={225} width={300} />
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
