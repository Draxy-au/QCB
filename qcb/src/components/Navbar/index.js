import Image from "next/image";

import styles from "./Navbar.module.scss";

import QCBLogo from "@assets/icons/qcb-logo.svg";

import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

import menu_data from "@data/menu";

const Navbar = ({ current }) => {
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
