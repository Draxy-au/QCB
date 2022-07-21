import Navbar from "@components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./Portal.module.scss";

export default function Portal() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.portal_page_container}>
        <Navbar current={"About Us"} />
        <h1>Member Portal</h1>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div className={styles.portal_page_container}>
        <Navbar current={"About Us"} />
        <h1>Member Portal</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
}
