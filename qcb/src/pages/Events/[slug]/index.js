import Navbar from "@components/Navbar";
import { useSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./EventDetails.module.scss";
import { EventInfo } from "@components/EventInfo";
import spinner from "@assets/icons/spinner.gif";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const EventDetails = ({ event }) => {
  const { data: session, status } = useSession();
  const [verified, setVerified] = useState(false);
  const [memberEmail, setMemberEmail] = useState();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      memberVerified(session.user.email);
    }
  }, [session]);

  async function memberVerified(email) {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const member_data = await client.query({
      query: gql`
        query Events {
          member(where: { email: "${email}" }) {
            username
            verifiedMember
          }
        },
      `,
    });
    const member = member_data.data.member;

    if (member.verifiedMember) {
      setMemberEmail(email);
      setVerified(true);
    } else {
      setVerified(false);
    }
  }

  const goBack = () => {
    router.push("/Members/Portal/Dashboard");
  };

  const loading = status === "loading";

  if (loading) {
    return (
      <div className="spinner">
        <Image priority src={spinner} height="30" width="30" alt="loading..." />
      </div>
    );
  }

  return (
    <div className={styles.event_details_container}>
      <Navbar current={"Events"} />
      <div className="pages">
        {verified && (
          <div className={styles.back}>
            <button className={styles.back_button} onClick={() => goBack()}>
              &#xab; Back
            </button>
          </div>
        )}
        <span className={styles.title}>{event.name}</span>
        <EventInfo
          event={event}
          verifiedMember={verified ? true : false}
          memberEmail={session?.user.email}
        />
      </div>
    </div>
  );
};

export default EventDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const slug = params.slug;

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const events_data = await client.query({
    query: gql`
        query Events {
          events(where: {slug: "${slug}"}) {
            capacity
            costDetails
            date
            description {
              html
            }
            duration
            eventImage
            facebookEventLink
            id
            indigenousLand
            members {
              username
              email
            }
            name
            slug
            ticketsLink
            time
            venue
            venueAddress
            venueType
            map {
              latitude
              longitude
            }
          }
        },
          `,
  });

  const event = events_data.data.events[0];

  return {
    props: {
      event,
    },
  };
}
