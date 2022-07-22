import Navbar from "@components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import styles from "./Portal.module.scss";

import spinner from "@assets/icons/spinner.gif";
import Image from "next/image";

export default function Portal() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const loading = status === "loading";

  if (loading) {
    return (
      <div>
        <Navbar current={"About Us"} />
        <Image src={spinner} height={30} width={30} alt="loading..." />
      </div>
    );
  }

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
