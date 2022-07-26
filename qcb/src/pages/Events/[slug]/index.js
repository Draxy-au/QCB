import Navbar from "@components/Navbar";

import styles from "./EventDetails.module.scss";

const EventDetails = ({ eventSlug }) => {
  return (
    <div className={styles.event_details_container}>
      <Navbar current={"Events"} />
      Event Details for {eventSlug}
    </div>
  );
};

export default EventDetails;

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }, context) {
  const eventSlug = params.slug;

  return {
    props: {
      eventSlug,
    },
  };
}
