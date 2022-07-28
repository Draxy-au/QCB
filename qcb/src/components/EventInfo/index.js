import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  registerEventMember,
  unregisterEventMember,
} from "src/db/registerEventMember";
import styles from "./EventInfo.module.scss";

export const EventInfo = ({ event, verifiedMember, memberEmail }) => {
  const [interested, setInterested] = useState(false);

  const registerForEvent = async () => {
    setInterested(true);
    registerEventMember(memberEmail, event.slug);
  };

  const unRegisterForEvent = async () => {
    setInterested(false);
    unregisterEventMember(memberEmail, event.slug);
  };

  return (
    <div className={styles.event_info_container}>
      <div className={styles.info}>
        <div className={styles.banner}>
          <Image
            src={event.eventImage.url}
            alt={event.name}
            height={436}
            width={833}
          />
        </div>
        {verifiedMember && !interested && (
          <div className={styles.register}>
            <button
              className={styles.register_button}
              onClick={() => registerForEvent()}
            >
              Register Interest
            </button>
          </div>
        )}
        {verifiedMember && interested && (
          <div className={styles.register}>
            <span className={styles.expressed_interest}>
              * Expressed Attending Event
            </span>
            <button
              className={styles.register_button}
              onClick={() => unRegisterForEvent()}
            >
              Unregister Interest
            </button>
          </div>
        )}
        <div className={styles.date_time}>
          {event.date} {event.time}
        </div>
        <div className={styles.duration}>
          <span className={styles.bold}>Duration:</span> {event.duration}{" "}
          {event.duration < 2 ? "day" : "days"}
        </div>
        <div className={styles.location}>
          <span className={styles.bold}>Location:</span> {event.venue} :{" "}
          {event.venueAddress}
        </div>
        {verifiedMember && (
          <div className={styles.map}>
            <Link
              href={`https://maps.google.com/?q=${event.map.latitude},${event.map.longitude}`}
            >
              <a target="_blank">
                <button className={styles.map_button}>Map</button>
              </a>
            </Link>
          </div>
        )}
        {verifiedMember && event.indigenousLand && (
          <div className={styles.indigenous_land}>
            <span className={styles.bold}>Indigenous Land:</span>{" "}
            {event.indigenousLand}
          </div>
        )}
        {verifiedMember && (
          <div className={styles.cost}>
            <span className={styles.bold}>Cost:</span> {event.costDetails}
          </div>
        )}
        {verifiedMember && event.ticketsLink && (
          <div className={styles.ticket_link}>
            <Link href={event.ticketsLink}>
              <a target="_blank">
                <button className={styles.ticket_button}>Tickets</button>
              </a>
            </Link>
          </div>
        )}
        {verifiedMember && (
          <div className={styles.details}>
            <span className={styles.bold}>Details:</span>
            <div
              dangerouslySetInnerHTML={{
                __html: event.description.html,
              }}
            />
          </div>
        )}
        {verifiedMember && event.facebookEventLink && (
          <div className={styles.facebook_link}>
            <Link href={event.facebookEventLink}>
              <a target="_blank">
                <button className={styles.facebook_button}>
                  Facebook Event
                </button>
              </a>
            </Link>
          </div>
        )}
        {!verifiedMember && (
          <div className={styles.signup_link}>
            <Link href={"/Members/Portal"}>
              <a>
                <button className={styles.signup_button}>
                  Sign In for Full Details
                </button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
