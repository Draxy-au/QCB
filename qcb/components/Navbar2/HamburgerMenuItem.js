import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./hamburgermenuitem.module.scss";

export const HamburgerMenuItem = ({
  title,
  link,
  dropdown = false,
  submenu,
  current,
}) => {
  const [submenuItems, setSubmenuItems] = useState();
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setSubmenuItems(submenu);
  }, [submenu]);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.menu_items}>
      {!dropdown && (
        <Link href={link}>
          <div
            className={`${styles.menu_item} ${
              title == current ? styles.selected : ""
            }`}
          >
            {title}
          </div>
        </Link>
      )}
      {dropdown && (
        <>
          <div
            className={`${styles.menu_item_dropdown} ${
              title == current ? styles.selected : ""
            }`}
          >
            <Link href={link}>
              <span className={styles.down_link}>{title}</span>
            </Link>
            <button
              className={styles.down_arrow}
              onClick={() => toggleDropDown()}
            >
              &#x25BC;
            </button>
          </div>

          <div
            className={`${styles.dropdown} ${
              showDropDown ? "" : styles.hide_drop_down
            } `}
          >
            {submenuItems &&
              submenuItems.map((item, index) => (
                <div className={styles.dropdown_items} key={index}>
                  <Link href={item.link}>
                    <div className={styles.dropdown_item}>{item.title}</div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
