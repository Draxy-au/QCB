import Navbar from "@components/Navbar";
import styles from "./Processing.module.scss";

export default function Processing() {
  return (
    <div className={styles.processing_page_container}>
      <Navbar current={"Members"} />
      <div className="pages">
        <h1>Processing</h1>
        <p>Thank you for your application!</p>
        <p>
          Your application to join Queensland Camping Bears has been submitted.
        </p>
        <p>
          An admin will review your details and enable your account shortly.
        </p>
        <p>You will recieve an email when registration is completed.</p>
        <p>
          Although this is a relatively quick process, please allow 1-3 business
          days for this to occur.
        </p>
        <p>
          If you have had no word on your application, please feel free to email
          QCB directly:{" "}
          <a href="mailto:qldcampingbears@gmail.com">
            qldcampingbears@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
