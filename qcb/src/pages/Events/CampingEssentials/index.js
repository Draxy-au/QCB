import Navbar from "@components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./CampingEssentials.module.scss";

export default function CampingEssentials({ campingEssentials }) {
  return (
    <div className={styles.campingessentials_page_container}>
      <Navbar current={"Events"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: campingEssentials.content.html,
        }}
      />
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageCampingEssentials {
        page(where: { slug: "camping-essentials" }) {
          id
          name
          slug
          content {
            html
          }
        }
      }
    `,
  });

  const campingEssentials = data.data.page;

  return {
    props: {
      campingEssentials,
    },
  };
}
