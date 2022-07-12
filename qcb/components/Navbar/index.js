import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import QCBLogo from "../../images/qcb-logo.svg";
import hamburger_menu from "../../assets/icons/hamburger_menu.png";

export default function Navbar({ current }) {
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
          <Link href={"/"}>
            <div className={styles.h_menu_item}>Home</div>
          </Link>
          <div className={`${styles.h_menu_item} ${styles.h_menu_dropdown}`}>
            <Link href={"/About"}>
              <span>About Us</span>
            </Link>
            <button onClick={toggleAboutUsMenu}>&#9660;</button>
          </div>
          {showAboutUsMenu && (
            <div className={styles.aboutus_menu_items}>
              <div className={styles.aboutus_menu_item}>Our Committee</div>
              <div className={styles.aboutus_menu_item}>Some Other Info</div>
              <div className={styles.aboutus_menu_item}>Contact Us</div>
            </div>
          )}
          <Link href={"/Members"}>
            <div className={styles.h_menu_item}>Members</div>
          </Link>
          <Link href={"/Events"}>
            <div className={styles.h_menu_item}>Events</div>
          </Link>
        </div>
      )}
      <div className={styles.menu_items}>
        <span>
          <Link href={"/"}>
            <button
              className={`${styles.dropbtn} ${
                current == "home" ? styles.selected : ""
              }`}
            >
              Home
            </button>
          </Link>
        </span>
        <span>
          <div className={styles.dropdown}>
            <Link href={"/About"}>
              <button
                className={`${styles.dropbtn} ${
                  current == "about_us" ? styles.selected : ""
                }`}
              >
                About Us
              </button>
            </Link>
            <div className={styles.dropdown_content}>
              <a href="#">Our Committee</a>
              <a href="#">Some other info</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </span>
        <span>
          <Link href={"/Members"}>
            <button
              className={`${styles.dropbtn} ${
                current == "members" ? styles.selected : ""
              }`}
            >
              Members
            </button>
          </Link>
        </span>
        <span>
          <Link href={"/Events"}>
            <button
              className={`${styles.dropbtn} ${
                current == "events" ? styles.selected : ""
              }`}
            >
              Events
            </button>
          </Link>
        </span>
      </div>
    </nav>
  );
}
