import Navbar from "@components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./About.module.scss";

export default function index({ aboutus }) {
  return (
    <div className={styles.about_container}>
      <Navbar current={"About Us"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: aboutus.content.html,
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
      query PageAboutUs {
        page(where: { slug: "about-us" }) {
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

  const aboutus = data.data.page;

  return {
    props: {
      aboutus,
    },
    revalidate: 10,
  };
}
