import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import QCBLogo from "../../images/qcb-logo.svg";
import hamburger_menu from "../../assets/icons/hamburger_menu.png";

export default function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showAboutUsMenu, setShowAboutUsMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const toggleAboutUsMenu = () => {
    setShowAboutUsMenu(!showAboutUsMenu);
  };

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
      <div className={styles.h_menu}>
        <button className={styles.hamburger_menu} onClick={toggleHamburgerMenu}>
          <Image
            src={hamburger_menu}
            alt="Menu"
            height={"50px"}
            width={"50px"}
          />
        </button>
      </div>
      {showHamburgerMenu && (
        <div className={styles.h_menu_items}>
          <div className={styles.h_menu_item}>Home</div>
          <div className={`${styles.h_menu_item} ${styles.h_menu_dropdown}`}>
            <span>About Us</span>
            <button onClick={toggleAboutUsMenu}>&#9660;</button>
          </div>
          {showAboutUsMenu && (
            <div className={styles.aboutus_menu_items}>
              <div className={styles.aboutus_menu_item}>Our Committee</div>
              <div className={styles.aboutus_menu_item}>Some Other Info</div>
              <div className={styles.aboutus_menu_item}>Contact Us</div>
            </div>
          )}
          <div className={styles.h_menu_item}>Members</div>
          <div className={styles.h_menu_item}>Events</div>
        </div>
      )}
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
