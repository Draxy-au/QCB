import Navbar from "@components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Feedback.module.scss";

export default function Feedback({ feedback }) {
  return (
    <div className={styles.feedback_page_container}>
      <Navbar current={"About Us"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: feedback.content.html,
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
      query PageFeedback {
        page(where: { slug: "feedback" }) {
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

  const feedback = data.data.page;

  return {
    props: {
      feedback,
    },
  };
}
