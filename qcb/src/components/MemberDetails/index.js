import { useEffect, useState } from "react";
import styles from "./MemberDetails.module.scss";

export const MemberDetails = ({ email }) => {
  const [userEmail, setUserEmail] = useState(email);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postCode, setPostCode] = useState("");
  const [dob, setDOB] = useState("");
  const [aboriginal, setAboriginal] = useState(false);
  const [tsi, setTsi] = useState(false);
  const [ssi, setSsi] = useState(false);
  const [nation, setNation] = useState("");
  const [mobile, setMobile] = useState("");
  const [eContact, setEContact] = useState("");
  const [eMobile, setEMobile] = useState("");

  return (
    <div className={styles.member_details_container}>
      <div className={styles.details_form}>
        <div className={styles.email}>
          <label>Email:</label>
          <input type="text" value={userEmail} readOnly />
        </div>
        <div className={styles.username}>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className={styles.first_name}>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className={styles.last_name}>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className={styles.suburb}>
          <label>Suburb:</label>
          <input
            type="text"
            value={suburb}
            onChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        </div>
        <div className={styles.postcode}>
          <label>Post Code:</label>
          <input
            type="text"
            value={postCode}
            onChange={(e) => {
              setPostCode(e.target.value);
            }}
          />
        </div>
        <div className={styles.dob}>
          <label>Date of Birth:</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
        </div>

        <div className={styles.nation}>
          <label>Nation:</label>
          <input
            type="text"
            value={nation}
            onChange={(e) => {
              setNation(e.target.value);
            }}
          />
        </div>
        <div className={styles.mobile}>
          <label>Mobile:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className={styles.econtact}>
          <label>Emergency Contact:</label>
          <input
            type="text"
            value={eContact}
            onChange={(e) => {
              setEContact(e.target.value);
            }}
          />
        </div>
        <div className={styles.emobile}>
          <label>Emergency Contact Mobile:</label>
          <input
            type="text"
            value={eMobile}
            onChange={(e) => {
              setEMobile(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
