import Navbar from "@components/Navbar";
import Image from "next/image";
import Link from "next/link";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./ContactInfo.module.scss";

export default function ContactInfo({ contactInfo }) {
  return (
    <div className={styles.contactinfo_page_container}>
      <Navbar current={"About Us"} />
      <div
        className="pages"
        dangerouslySetInnerHTML={{
          __html: contactInfo.content.html,
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
      query PageContactInfo {
        page(where: { slug: "contact-info" }) {
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

  const contactInfo = data.data.page;

  return {
    props: {
      contactInfo,
    },
  };
}
