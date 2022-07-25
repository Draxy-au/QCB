import { useState } from "react";
import Image from "next/image";

import styles from "./MemberPortal.module.scss";

import fakeMemberData from "@data/fakeMember.json";

import pic from "public/images/card_1.jpg";
import Link from "next/link";

export const MemberPortal = ({ memberData }) => {
  const [data, setData] = useState(fakeMemberData[0]);

  return (
    <div className={styles.member_portal_container}>
      <div className="pages">
        <h1>Member Portal</h1>
        <p>Welcome to the Member Portal, {data.username}.</p>
        <h1>News</h1>
        <p>
          13-Oct Consent Matters <br />
          10-Oct New Merch in Shop!
        </p>
        <h1>Events</h1>
        <p>
          02 Aug Camp Cooyah
          <br />
          22 Aug Beach Trip!
        </p>

        <h1>Gallery</h1>

        <div className={styles.gallery_area}>
          <Image src={pic} alt="" height={80} width={100} />
          <Image src={pic} alt="" height={80} width={100} />
          <Image src={pic} alt="" height={80} width={100} />
        </div>
        <div className={styles.gallery_link}>
          <Link href="Members/Gallery">
            <a>Visit gallery</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
