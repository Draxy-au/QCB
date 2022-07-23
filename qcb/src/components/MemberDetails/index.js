import validateUser from "@util/validateUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import addMember from "src/db/addMember";
import styles from "./MemberDetails.module.scss";

export const MemberDetails = ({ email }) => {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState(email);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postCode, setPostCode] = useState("");
  const [dob, setDOB] = useState("");
  const [aboringinalChecked, setAboringinalChecked] = useState(false);
  const [tsiChecked, setTsiChecked] = useState(false);
  const [ssiChecked, setSsiChecked] = useState(false);
  const [nation, setNation] = useState("");
  const [mobile, setMobile] = useState("");
  const [eContact, setEContact] = useState("");
  const [eMobile, setEMobile] = useState("");
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [registrationError, setRegistrationError] = useState(false);

  const handleAboriginalClick = () =>
    setAboringinalChecked(!aboringinalChecked);

  const handleTsiClick = () => setTsiChecked(!tsiChecked);

  const handleSsiClick = () => setSsiChecked(!ssiChecked);

  const handleTermsAndConditionsClick = () =>
    setTermsAndConditionsChecked(!termsAndConditionsChecked);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUserData = {
      userEmail,
      userName,
      admin: false,
      verified: false,
      firstName,
      lastName,
      suburb,
      postCode,
      dob,
      aboriginal: aboringinalChecked,
      tsi: tsiChecked,
      ssi: ssiChecked,
      nation,
      emails: true,
      mobile,
      eContact,
      eMobile,
      tc: termsAndConditionsChecked,
    };
    const errors = await validateUser(newUserData);
    setFormErrors(errors);
    if (errors.length < 1) {
      // Add user to Hygraph (awaiting verification)
      if (await addMember(newUserData)) {
        //successfully created new user
        router.push("/Members/Processing");
      } else {
        setRegistrationError(true);
      }
    }
  };

  if (!registrationError) {
    return (
      <div className={styles.member_details_container}>
        <div className="pages">
          <h1>New Members Registration</h1>
          <p>
            Members receive the latest news and information on upcoming events,
            including ticket information, maps to events and photos!
          </p>
          <p>
            QLD Camping Bears requires some information from members to better
            provide services and content to you.
          </p>
          <p>
            Please fill in the form below and read through and agree to the
            Terms and Conditions of joining our community group.
          </p>
          <p>
            Once your application is approved, you will receive an Email letting
            you know you can access the Member Portal!
          </p>
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.email}>
            <label>Email:</label>
            <input
              className={styles.locked}
              name="email"
              type="text"
              value={userEmail}
              readOnly
            />
          </div>
          <div className={styles.username}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              maxLength="16"
              placeholder="(max 16 characters)"
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
              name="firstName"
              maxLength="30"
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
              name="lastName"
              maxLength="30"
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
              name="suburb"
              maxLength="30"
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
              name="postCode"
              maxLength="4"
              value={postCode}
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
            />
          </div>
          <div className={styles.dob}>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </div>

          <div className={styles.ancestry}>
            <label>Identify As:</label>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="aboriginal"
                checked={aboringinalChecked}
                onChange={handleAboriginalClick}
              />
              <p>Aboriginal</p>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="tsi"
                checked={tsiChecked}
                onChange={handleTsiClick}
              />
              <p>Torres Strait Islander</p>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="ssi"
                checked={ssiChecked}
                onChange={handleSsiClick}
              />
              <p>South Sea Islander</p>
            </div>
          </div>
          {(aboringinalChecked || ssiChecked || tsiChecked) && (
            <div className={styles.nation}>
              <label>Nation:</label>
              <input
                type="text"
                name="nation"
                placeholder="(optional)"
                value={nation}
                onChange={(e) => {
                  setNation(e.target.value);
                }}
              />
            </div>
          )}

          <div className={styles.mobile}>
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              maxLength="11"
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
              name="emergencyContactName"
              maxLength="30"
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
              name="emergencyContactMobile"
              maxLength="11"
              value={eMobile}
              onChange={(e) => {
                setEMobile(e.target.value);
              }}
            />
          </div>
          <div className={styles.terms_and_conditions}>
            <label>Terms and Conditions (LINK)</label>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={termsAndConditionsChecked}
                onChange={handleTermsAndConditionsClick}
              />
              <p>Agree to the Terms and Conditions</p>
            </div>
          </div>
          {formErrors.length > 0 &&
            formErrors.map((error, index) => (
              <div className={styles.error} key={index}>
                {error}
              </div>
            ))}
          <div className={styles.submit_button}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <div>ERROR OCCURRED</div>;
  }
};
