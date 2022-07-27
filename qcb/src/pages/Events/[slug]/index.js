import Navbar from "@components/Navbar";
import { useSession, getSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./EventDetails.module.scss";
import { EventInfo } from "@components/EventInfo";
import Image from "next/image";

const EventDetails = ({ event, member }) => {
  const { status } = useSession();

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
        <span className={styles.title}>{event.name}</span>
        <EventInfo event={event} verifiedMember={member.verifiedMember} />
      </div>
    </div>
  );
};

export default EventDetails;

export async function getServerSideProps({ params }, context) {
  const eventSlug = params.slug;
  const session = await getSession(context);

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const events_data = await client.query({
    query: gql`
    query Events {
      events(where: {slug: "${eventSlug}"}) {
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

  const memberData = await client.query({
    query: gql`
      query PageMemberSignUp {
        member(where: { email: "${session.user.email}" }) {
          username
          verifiedMember
        }
      }
    `,
  });

  const member = memberData.data.events;
  const event = events_data.data.events[0];

  return {
    props: {
      event,
      member,
    },
  };
}
