import Navbar from "@components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import styles from "./Portal.module.scss";

export default function Portal() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const loading = status === "loading";

  if (loading) return null;

  if (session) {
    router.push("/Members/Portal/MemberSignUp");
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
