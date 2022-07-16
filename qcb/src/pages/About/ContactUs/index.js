import Navbar from "@components/Navbar";

import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.contactus_page_container}>
      <Navbar current={"About Us"} />
      Contact Us
    </div>
  );
}
