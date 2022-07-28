import { MemberDetails } from "@components/MemberDetails";
import { MemberPortal } from "@components/MemberPortal";
import Navbar from "@components/Navbar";
import styles from "./Members.module.scss";

export default function Members() {
  return (
    <div className={styles.memberspage_container}>
      <Navbar current={"Members"} />
      <div className="pages">
        <h1>Members Information Page</h1>
      </div>
      {/* <MemberPortal memberData={[]} /> */}
      Members of QLD Camping Bears enjoy...
    </div>
  );
}
