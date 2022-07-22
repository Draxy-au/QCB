import { useSession, getSession, signOut } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Navbar from "@components/Navbar";

import styles from "./MemberSignUp.module.scss";
import { MemberDetails } from "@components/MemberDetails";

export default function MemberSignUp({ session, member }) {
  const { status } = useSession();

  if (member) {
    return (
      <div className={styles.member_signup_page_container}>
        <Navbar />
        <div className="pages">
          <h1>Member Sign Up</h1>
          <p>{session.user.email}</p>
          <p>{member && member.firstName}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.member_signup_page_container}>
        <Navbar />
        <div className="pages">
          <MemberDetails email={session.user.email} />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }
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
  console.log("Member:", member);

  return {
    props: {
      session,
      member,
    },
  };
};
