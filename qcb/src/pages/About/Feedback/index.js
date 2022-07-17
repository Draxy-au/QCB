import Navbar from "@components/Navbar";
import styles from "./Feedback.module.scss";

export default function Feedback() {
  return (
    <div className={styles.feedback_page_container}>
      <Navbar current={"About Us"} />
      <div>
        <h1 className="title_1">Feedback</h1>
      </div>
      <p className="normal_text">We welcome any and all feedback</p>
      <p className="normal_text">
        If you have any group suggestions please email qldcampingbears@gmail.com
      </p>
      <p className="normal_text">
        Please ensure you have you name an best contact number in also so we can
        phone you to discuss.
      </p>
    </div>
  );
}
