import Navbar from "../../components/Navbar2";
import styles from "./Members.module.scss";

export default function Members() {
  return (
    <div className={styles.memberspage_container}>
      <Navbar current={"Members"} />
      Members
    </div>
  );
}
