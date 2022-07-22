import { MemberDetails } from "@components/MemberDetails";
import Navbar from "@components/Navbar";
import styles from "./Members.module.scss";

export default function Members() {
  return (
    <div className={styles.memberspage_container}>
      <Navbar current={"Members"} />

      <MemberDetails email="draxy@gmail.com" />
    </div>
  );
}
