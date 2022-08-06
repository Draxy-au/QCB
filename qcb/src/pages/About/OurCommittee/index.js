import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Navbar from "@components/Navbar";

import styles from "./OurCommittee.module.scss";

import { BioCard } from "@components/BioCard";

export default function OurCommittee({ bios }) {
  return (
    <div className={styles.ourcommittee_page_container}>
      <Navbar current={"About Us"} />
      <div className={styles.title_1}>Our Committee</div>

      {bios &&
        bios.map((item, index) => (
          <div className={styles.bio} key={item.slug}>
            <BioCard
              photo={item.image.url}
              name={item.name}
              description={item.content.html}
              flip={index % 2 == 0 ? false : false} // change to true for alternate flipping
            />
          </div>
        ))}
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
        bios {
          id
          name
          content {
            html
          }
          image
          slug
        }
      }
    `,
  });

  const bios = data.data.bios;

  return {
    props: {
      bios,
    },
    revalidate: 10,
  };
}
