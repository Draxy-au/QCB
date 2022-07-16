import Navbar from "@components/Navbar";
import styles from "./Events.module.scss";

export default function Events() {
  return (
    <div className={styles.eventspage_container}>
      <Navbar current={"Events"} />
      Events
    </div>
  );
}
