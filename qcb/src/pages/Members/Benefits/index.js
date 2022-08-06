import Navbar from "@components/Navbar";
import Image from "next/image";
import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Benefits.module.scss";

export default function Benefits({ benefits }) {
  return (
    <div className={styles.benefits_page_container}>
      <Navbar current={"Members"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: benefits.content.html,
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
      query PageMemberBenefits {
        page(where: { slug: "member-benefits" }) {
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

  const benefits = data.data.page;

  return {
    props: {
      benefits,
    },
    revalidate: 10,
  };
}
