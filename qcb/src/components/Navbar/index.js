import styles from "./Navbar.module.scss";

import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

import menu_data from "@data/menu";
import QcbLogo from "@components/QcbLogo";

const Navbar = ({ current }) => {
  return (
    <nav className={styles.navarea}>
      <QcbLogo />
      <div className={styles.menus_area}>
        <div className={styles.standard_menu}>
          <Menu data={menu_data} current={current} />
        </div>
        <div className={styles.hamburger_menu}>
          <HamburgerMenu data={menu_data} current={current} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
