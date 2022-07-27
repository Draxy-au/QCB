import Image from "next/image";
import Link from "next/link";
import styles from "./EventInfo.module.scss";

export const EventInfo = ({ event }) => {
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
        <div className={styles.cost}>
          <span className={styles.bold}>Cost:</span> {event.costDetails}
        </div>
        <div className={styles.details}>
          <span className={styles.bold}>Details:</span>
          <div
            dangerouslySetInnerHTML={{
              __html: event.description.html,
            }}
          />
        </div>
        {event.facebookEventLink && (
          <div className={styles.facebook_link}>
            <span className={styles.bold}>Facebook Link:</span>
            <Link href={event.facebookEventLink}>
              <a target="_blank">Link</a>
            </Link>
          </div>
        )}
        {event.ticketsLink && (
          <div className={styles.ticket_link}>
            <span className={styles.bold}>Ticket Link:</span>
            <Link href={event.ticketsLink}>
              <a target="_blank">Link</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
