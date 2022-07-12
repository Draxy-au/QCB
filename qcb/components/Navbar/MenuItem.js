import styles from "./styles.module.scss";

export const MenuItem = ({ menu_name, dropdown = false }) => {
  return (
    <div>
      {!dropdown && <div className={styles.h_menu_item}>{menu_name}</div>}
    </div>
  );
};
