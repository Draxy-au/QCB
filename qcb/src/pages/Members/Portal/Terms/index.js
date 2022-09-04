import Navbar from "@components/Navbar";
import Image from "next/image";
import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Terms.module.scss";

export default function Terms({ terms }) {
  return (
    <div className={styles.terms_page_container}>
      <Navbar current={"Members"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: terms.content.html,
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
      query PageMemberTerms {
        page(where: { slug: "member-terms" }) {
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

  const terms = data.data.page;

  return {
    props: {
      terms,
    },
    revalidate: 10,
  };
}
