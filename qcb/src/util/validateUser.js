import checkExists from "./checkExists";

export default async function validateUser(userData) {
  let errors = [];

  if (userData.userEmail) {
    if (await checkExists("email", userData.userEmail)) {
      errors = [
        ...errors,
        "An account is already registered with this Email address.",
      ];
    }
  } else {
    errors = [...errors, "Missing Email Address."];
  }

  if (userData.userName) {
    if (await checkExists("username", userData.userName)) {
      errors = [...errors, "This username is already in use."];
    }
  } else {
    errors = [...errors, "Missing Username."];
  }

  if (!userData.firstName) {
    errors = [...errors, "Missing First Name."];
  }

  if (!userData.lastName) {
    errors = [...errors, "Missing Last Name."];
  }

  if (!userData.suburb) {
    errors = [...errors, "Missing Last Name."];
  }

  if (!userData.postCode) {
    errors = [...errors, "Missing Post Code."];
  }

  if (!userData.dob) {
    errors = [...errors, "Missing Date of Birth."];
  } else {
    let date1 = new Date(userData.dob);
    let date2 = new Date(); // check if today or future date
    let date3 = new Date(); // check if over 18
    date3 = date3.setFullYear(date3.getFullYear() - 18);
    if (date1 >= date2) {
      errors = [...errors, "Date of Birth incorrect."];
    } else if (date3 < date1) {
      errors = [...errors, "You must be over 18 years old."];
    }
  }

  if (!userData.mobile) {
    errors = [...errors, "Missing Mobile Number."];
  }

  if (!userData.eContact) {
    errors = [...errors, "Missing Emergency Contact."];
  }

  if (!userData.eMobile) {
    errors = [...errors, "Missing Emergency Contact Number."];
  }

  if (!userData.tc) {
    errors = [...errors, "Members must Agree to the Terms and Conditions."];
  }

  return errors;
}
