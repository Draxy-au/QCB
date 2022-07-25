import Navbar from "@components/Navbar";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";

import styles from "./Events.module.scss";

import spinner from "@assets/icons/spinner.gif";

export default function Events({ session, member }) {
  const { status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return (
      <div className="spinner">
        <Image priority src={spinner} height="30" width="30" alt="loading..." />
      </div>
    );
  }

  if (member) {
    return (
      <div className={styles.eventspage}>
        <Navbar />
        <div className="pages">
          <h1>Member Event Page</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.eventspage}>
        <Navbar />
        <div className="pages">
          <h1>Non-Member Event Page</h1>
        </div>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
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

    return {
      props: {
        session,
        member,
      },
    };
  } else {
    return { props: {} };
  }
};
