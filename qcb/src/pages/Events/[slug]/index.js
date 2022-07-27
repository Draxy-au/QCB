import Navbar from "@components/Navbar";
import { useSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./EventDetails.module.scss";
import { EventInfo } from "@components/EventInfo";
import spinner from "@assets/icons/spinner.gif";
import Image from "next/image";
import { useEffect, useState } from "react";

const EventDetails = ({ event }) => {
  const { status, data: session } = useSession();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    setVerified(memberVerified());
  }, []);

  const memberVerified = async () => {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const member_data = await client.query({
      query: gql`
        query Events {
          member(where: { email: "${session.user.email}" }) {
            username
            verifiedMember
          }
        },
      `,
    });
    const member = member_data.data.member;
    if (member.length > 0) {
      return true;
    } else {
      return false;
    }
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
        <span className={styles.title}>{event.name}</span>
        <EventInfo event={event} verifiedMember={true} />
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

  const event = events_data.data.events[0];

  return {
    props: {
      event,
    },
  };
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const eventSlug = params.slug;
//   const session = await getSession(context);

//   const client = new ApolloClient({
//     uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
//     cache: new InMemoryCache(),
//   });

//   if (!session) {
//     const events_data = await client.query({
//       query: gql`
//     query Events {
//       events(where: {slug: "${eventSlug}"}) {
//         capacity
//         costDetails
//         date
//         description {
//           html
//         }
//         duration
//         eventImage
//         facebookEventLink
//         id
//         indigenousLand
//         members {
//           username
//         }
//         name
//         slug
//         ticketsLink
//         time
//         venue
//         venueAddress
//         venueType
//         map {
//           latitude
//           longitude
//         }
//       }
//     },
//       `,
//     });
//     const event = events_data.data.events[0];
//     return {
//       props: {
//         event,
//       },
//     };
//   } else {
//     console.log("GOT IN TO SESSION");
//     const events_data = await client.query({
//       query: gql`
//       query Events {
//         events(where: {slug: "${eventSlug}"}) {
//           capacity
//           costDetails
//           date
//           description {
//             html
//           }
//           duration
//           eventImage
//           facebookEventLink
//           id
//           indigenousLand
//           members {
//             username
//           }
//           name
//           slug
//           ticketsLink
//           time
//           venue
//           venueAddress
//           venueType
//           map {
//             latitude
//             longitude
//           }
//         }
//         member(where: { email: "${session.user.email}" }) {
//           username
//           verifiedMember
//         }
//       }
//       ,`,
//     });
//     const event = events_data.data.events[0];
//     const member = memberData.data.member;
//     return {
//       props: {
//         event,
//         member,
//       },
//     };
//   }
// }
