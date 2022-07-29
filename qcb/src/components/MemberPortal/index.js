import { useEffect, useState } from "react";
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./MemberPortal.module.scss";

import pic from "public/images/card_1.jpg";
import Link from "next/link";

export const MemberPortal = ({ memberData }) => {
  const [newsData, setNewsData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const getNews = async () => {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const news_data = await client.query({
      query: gql`
        query News {
          posts(orderBy: date_ASC) {
            date
            id
            image
            name
            member {
              username
            }
            content {
              html
            }
          }
        }
      `,
    });

    setNewsData(news_data.data.posts);
  };

  const getEvents = async () => {
    const client = new ApolloClient({
      uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
      cache: new InMemoryCache(),
    });

    const events_data = await client.query({
      query: gql`
        query Events {
          events(orderBy: date_ASC) {
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
          events (orderBy: date_ASC, where: {members_some: {username: "${username}"}}){
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
    getNews();
    getEvents();
    getRegistedEvents(memberData.username);
  }, []);

  return (
    <div className={styles.member_portal_container}>
      <div className={styles.portal}>
        <h1>Member Portal</h1>
        <p>Welcome to the Member Portal, {memberData.username}.</p>
        {newsData && (
          <>
            <h1>News</h1>
            {newsData.map((post) => (
              <div key={post.id}>
                <Link href={`/News/${post.slug}`}>
                  <a>
                    {post.date} - {post.name}
                  </a>
                </Link>
              </div>
            ))}
          </>
        )}
        {registeredEvents && (
          <div className={styles.registered_events_section}>
            <h1>Your Registered Events</h1>
            <div className={styles.registered_events}>
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
          </div>
        )}
        <div className={styles.events_section}>
          <h1>Upcoming Events</h1>
          <div className={styles.events}>
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
        </div>
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
