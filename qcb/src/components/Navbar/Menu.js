import { MenuItem } from "./MenuItem";

import styles from "./Menu.module.scss";

const Menu = ({ data, current }) => {
  return (
    <div className={styles.menu_container}>
      {data.map((item, index) => (
        <div key={index} className={styles.menu_link}>
          {!item.dropdown ? (
            <MenuItem title={item.title} link={item.link} current={current} />
          ) : (
            <MenuItem
              title={item.title}
              dropdown={true}
              link={item.link}
              current={current}
              submenu={item.submenu}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
