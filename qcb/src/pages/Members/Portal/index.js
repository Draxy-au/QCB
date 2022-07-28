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
      <div className="spinner">
        <Image priority src={spinner} height={30} width={30} alt="loading..." />
      </div>
    );
  }

  if (session) {
    router.push("/Members/Portal/MemberSignUp");
  } else {
    return (
      <div className={styles.portal_page_container}>
        <Navbar current={"Members"} />
        <div className="pages">
          <h1>Member Portal</h1>
          <p>
            The Member Portal is where members QLD Camping Bears communicate
            upcoming events, the latest news, share photos, and much more.
          </p>
          <div className={styles.portal_button}>
            <button onClick={() => signIn()}>Enter Member Portal</button>
          </div>
        </div>
      </div>
    );
  }
}
