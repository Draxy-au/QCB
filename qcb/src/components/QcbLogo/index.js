import Image from "next/image";

import styles from "./QcbLogo.module.scss";

import QCBLogo from "@assets/icons/qcb-logo.svg";

export default function QcbLogo() {
  return (
    <div className={styles.qcb_logo}>
      <Image
        src={QCBLogo}
        height={"100px"}
        width={"100px"}
        alt="QLD Camping Bears"
      />
      <span className={styles.logo_text}>QLD Camping Bears</span>
    </div>
  );
}
