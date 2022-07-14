import Navbar from "../../components/Navbar2";
import styles from "./Events.module.scss";

export default function Events() {
  return (
    <div className={styles.eventspage_container}>
      <Navbar current={"events"} />
      Events
    </div>
  );
}
