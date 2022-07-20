import styles from "./Flags.module.scss";
import Image from "next/image";

import flag_a from "public/images/flags/flag_aboriginal.jpg";
import flag_b from "public/images/flags/flag_tsi.jpg";
import flag_c from "public/images/flags/flag_all.jpg";

export default function Flag() {
  return (
    <div className={styles.flag_container}>
      <Image src={flag_a} alt="" height={50} width={75} />
      <Image src={flag_b} alt="" height={50} width={75} />
      <Image src={flag_c} alt="" height={50} width={75} />
    </div>
  );
}
