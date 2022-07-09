import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import QCBLogo from "../../images/qcb-logo.svg";

export default function index() {
  return (
    <nav className={styles.navarea}>
      <div className={styles.qcb_logo}>
        <Image
          src={QCBLogo}
          height={"100px"}
          width={"100px"}
          alt="QLD Camping Bears"
        />
        <span className={styles.logo_text}>QLD Camping Bears</span>
      </div>
      <div className={styles.menu_items}>
        <span>
          <Link href={"/"}>Home</Link>
        </span>
        <span>
          <div className={styles.dropdown}>
            <Link href={"/about"}>
              <button className={styles.dropbtn}>About Us</button>
            </Link>
            <div className={styles.dropdown_content}>
              <a href="#">Our Committee</a>
              <a href="#">Some other info</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </span>
        <span>
          <Link href={"/"}>Members</Link>
        </span>
        <span>
          <Link href={"/"}>Events</Link>
        </span>
      </div>
    </nav>
  );
}
