import Navbar from "@components/Navbar";
import { useSession, getSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";

import styles from "./Events.module.scss";

import spinner from "@assets/icons/spinner.gif";
import { useEffect, useState } from "react";
import Carousel from "@components/Carousel";
import Link from "next/link";

export default function Events({ events }) {
  const { status } = useSession();

  const [eventSlides, setEventSlides] = useState([]);
  const [eventURLs, setEventURLs] = useState([]);

  useEffect(() => {
    if (events) {
      events.forEach((event) => {
        setEventSlides([...eventSlides, event.eventBanner.url]);
        setEventURLs([...eventURLs, `/Events/${event.slug}`]);
      });
    }
  }, []);

  const loading = status === "loading";

  if (loading) {
    return (
      <div className="spinner">
        <Image priority src={spinner} height="30" width="30" alt="loading..." />
      </div>
    );
  }

  return (
    <div className={styles.eventspage_container}>
      <Navbar />
      <div className="pages">
        <div className={styles.event_carousel}>
          {events && (
            <Carousel
              slides={eventSlides}
              links={eventURLs}
              autoPlay={eventSlides.length > 1 ? true : false}
            />
          )}
        </div>

        <div className={styles.event_banners}>
          {events.map((event, index) => (
            <div className={styles.event_banner} key={index}>
              <div className={styles.title}>
                <h1>{event.name}</h1>
              </div>
              <div>
                <Link href={eventURLs[index]}>
                  <a>
                    <Image
                      src={event.eventBanner.url}
                      alt={event.name}
                      height={436}
                      width={833}
                    />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const events_data = await client.query({
    query: gql`
    query Events {
      events(where: {date_gt: "${new Date().toISOString().slice(0, 10)}"}) {
        slug
        name
        eventBanner
      }
    }, 
      `,
  });

  const events = events_data.data.events;

  return {
    props: {
      events,
    },
  };
};
