import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./menuitem.module.scss";

export const MenuItem = ({
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

  const toggleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
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
        <div
          className={styles.dropdown_menu_item}
          onMouseEnter={() => toggleShowDropDown()}
          onMouseLeave={() => toggleShowDropDown()}
        >
          <Link href={link}>
            <div
              className={`${styles.menu_item} ${
                title == current ? styles.selected : ""
              }`}
            >
              {title}
            </div>
          </Link>
          <div className={styles.dropdown}>
            {submenuItems &&
              showDropDown &&
              submenuItems.map((item, index) => (
                <div
                  className={
                    showDropDown ? styles.dropdown_item : styles.dropdown_hide
                  }
                  key={index}
                >
                  <Link href={item.link}>
                    <div className={styles.dropdown_item_title}>
                      {item.title}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
