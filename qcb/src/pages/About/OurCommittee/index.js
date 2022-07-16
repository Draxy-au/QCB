import Image from "next/image";

import Navbar from "@components/Navbar";

import styles from "./OurCommittee.module.scss";

import bios_data from "@data/bios";
import { BioCard } from "@components/BioCard";

export default function OurCommittee() {
  return (
    <div className={styles.ourcommittee_page_container}>
      <Navbar current={"About Us"} />
      <div className={styles.title_1}>Our Committee</div>

      {bios_data &&
        bios_data.map((item, index) => (
          <div className={styles.bio} key={index}>
            <BioCard
              photo={item.photo}
              name={item.name}
              description={item.description}
              flip={index % 2 == 0 ? false : true}
            />
          </div>
        ))}
    </div>
  );
}
