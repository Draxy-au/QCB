import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

export default function index() {
  return (
    <div className={styles.header}>
      <div className={styles.socials}>
        <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
        >
          <Image height={"30px"} width={"30px"} src={facebook} alt="Facebook" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
        >
          <Image
            height={"30px"}
            width={"30px"}
            src={instagram}
            alt="Instagram"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
        >
          <Image height={"30px"} width={"30px"} src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
}
