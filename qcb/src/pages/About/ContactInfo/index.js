import Navbar from "@components/Navbar";
import Image from "next/image";
import Link from "next/link";

import styles from "./ContactInfo.module.scss";

import facebook from "@assets/icons/facebook.svg";
import instagram from "@assets/icons/instagram.svg";

export default function ContactInfo() {
  return (
    <div className={styles.contactinfo_page_container}>
      <Navbar current={"About Us"} />
      <div>
        <h1 className="title_1">Contact Info</h1>
      </div>
      <p className="normal_text">
        Todd Hammond is the founder of QLD Camping Bears
      </p>
      <p className="normal_text">
        Best contact is email: qldcampingbears@gmail.com
      </p>
      <p className="normal_text">
        Please make sure you follow us on{" "}
        <Link href="https://www.instagram.com/qldcampingbears/">
          <a target={"_blank"}>
            <Image
              height={"30px"}
              width={"30px"}
              src={instagram}
              alt="Instagram"
              className={styles.svg_color}
            />{" "}
            Instagram
          </a>
        </Link>{" "}
        and{" "}
        <Link href="https://www.facebook.com/groups/256763945352771">
          <a target={"_blank"}>
            <Image
              height={"30px"}
              width={"30px"}
              src={facebook}
              alt="Facebook"
              className={styles.svg_color}
            />{" "}
            Facebook
          </a>
        </Link>
        .
      </p>
    </div>
  );
}
