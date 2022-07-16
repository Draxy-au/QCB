import { useState } from "react";
import Image from "next/image";

import { HamburgerMenuItem } from "./HamburgerMenuItem";

import styles from "./HamburgerMenu.module.scss";

import icon_hamburger_menu from "@assets/icons/hamburger_menu.png";

export default function HamburgerMenu({ data, current }) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>
      <div className={styles.hamburger_menu}>
        <button className={styles.hamburger_icon} onClick={toggleHamburgerMenu}>
          <Image
            src={icon_hamburger_menu}
            alt="Menu"
            height={"50px"}
            width={"50px"}
          />
        </button>
      </div>
      {showHamburgerMenu &&
        data.map((item, index) => (
          <div key={index} className={styles.menu_slot}>
            {!item.dropdown ? (
              <HamburgerMenuItem
                title={item.title}
                link={item.link}
                current={current}
              />
            ) : (
              <HamburgerMenuItem
                title={item.title}
                dropdown={true}
                link={item.link}
                current={current}
                submenu={item.submenu}
              />
            )}
          </div>
        ))}
    </>
  );
}
