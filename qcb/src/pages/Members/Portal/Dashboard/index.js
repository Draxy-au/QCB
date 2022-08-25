import { MemberPortal } from "@components/MemberPortal";
import { useSession, getSession, signOut } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Navbar from "@components/Navbar";
import styles from "./Dashboard.module.scss";

export default function Dashboard({ session, member }) {
  return (
    <div className={styles.dashboard_container}>
      <Navbar current={"Members"} />
      <div>
        <MemberPortal memberData={member} />
        <div className={styles.sign_out}>
          <button className={styles.sign_out_button} onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/Members/Portal",
      },
    };
  }

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageMemberSignUp {
        member(where: { email: "${session.user.email}" }) {
          firstName
          lastName
          mobile
          nation
          postcode
          southSeaIslander
          suburb
          torresStraitIslander
          username
          aboriginal
          acceptEmails
          admin
          emergencyContactName
          emergencyContactNumber
          id
        }
      }
    `,
  });

  const member = data.data.member;

  if (!member.username) {
    return {
      redirect: {
        destination: "/Members/Processing",
      },
    };
  }

  return {
    props: {
      session,
      member,
    },
  };
};
