import { useEffect, useState } from "react";
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./MemberPortal.module.scss";

import fakeMemberData from "@data/fakeMember.json";

import pic from "public/images/card_1.jpg";
import Link from "next/link";

export const MemberPortal = ({ memberData }) => {
  const [data, setData] = useState(memberData);
  const [eventData, setEventData] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const getEvents = async () => {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const events_data = await client.query({
      query: gql`
        query Events {
          events {
            date
            id
            name
            slug
          }
        }
      `,
    });

    setEventData(events_data.data.events);
  };

  const getRegistedEvents = async (username) => {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const events_data = await client.query({
      query: gql`
        query Events {
          events (where: {members_every: {username: "${username}"}}){
            date
            id
            name
            slug
          }
        }
      `,
    });

    setRegisteredEvents(events_data.data.events);
  };

  useEffect(() => {
    getEvents();
    getRegistedEvents();
    if (!memberData) {
      setData(fakeMemberData[0]);
    }
  }, []);

  return (
    <div className={styles.member_portal_container}>
      <div className={styles.portal}>
        <h1>Member Portal</h1>
        <p>Welcome to the Member Portal, {data.username}.</p>
        <h1>News</h1>
        <p>
          13-Oct Consent Matters <br />
          10-Oct New Merch in Shop!
        </p>
        <h1>Upcoming Events</h1>
        <div className={styles.events_section}>
          {eventData &&
            eventData.map((event) => (
              <div key={event.slug}>
                <Link href={`/Events/${event.slug}`}>
                  <a>
                    {event.date} - {event.name}
                  </a>
                </Link>
              </div>
            ))}
        </div>
        {registeredEvents && (
          <>
            <h1>Attending Events</h1>
            <div className={styles.events_section}>
              {registeredEvents.map((event) => (
                <div key={event.slug}>
                  <Link href={`/Events/${event.slug}`}>
                    <a>
                      {event.date} - {event.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
        <h1>Gallery</h1>

        <div className={styles.gallery_area}>
          <Image src={pic} alt="" height={80} width={100} />
          <Image src={pic} alt="" height={80} width={100} />
          <Image src={pic} alt="" height={80} width={100} />
        </div>
        <div className={styles.gallery_link}>
          <Link href="Members/Gallery">
            <a>Visit gallery</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
