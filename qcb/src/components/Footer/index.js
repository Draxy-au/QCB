import Image from "next/image";

import facebook from "@assets/icons/facebook.svg";
import instagram from "@assets/icons/instagram.svg";
import twitter from "@assets/icons/twitter.svg";

import styles from "./Footer.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.legal}>
        <span className={styles.copyright}>
          Copyright 2022 QLD Camping Bears | All Rights Reserved
        </span>
        We at QLD Camping Bears acknowledge Aboriginal and Torres Strait
        Islanders as the original custodians of the land in which we reside.
      </div>
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
        {/* <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
        >
          <Image height={"30px"} width={"30px"} src={twitter} alt="Twitter" />
        </a> */}
      </div>
    </div>
  );
}
