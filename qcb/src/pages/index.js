import Navbar from "@components/Navbar";
import Carousel from "@components/Carousel";
import Card from "@components/Card";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Home.module.scss";

import slide_1 from "@assets/slides/slide-1.png";
import slide_2 from "@assets/slides/slide-2.png";
import slide_3 from "@assets/slides/slide-3.png";
import { useEffect, useState } from "react";
const slides = [slide_1, slide_2, slide_3];

export default function Home({ cards }) {
  const [cardList, setCardList] = useState(cards);

  useEffect(() => {
    setCardList(cards);
  }, [cards]);

  return (
    <div className={styles.homepage_container}>
      <Navbar current="Home" />

      <div className={styles.content}>
        <div className={styles.carouselArea}>
          <Carousel
            slides={slides}
            indicators
            controls
            interval={4000}
            autoPlay={true}
            width={1100}
          />
        </div>
        <div className={styles.cardArea}>
          {cardList?.map((card) => (
            <Card
              key={card.id}
              cardImage={card.image.url}
              text={card.description}
            />
          ))}
        </div>
      </div>
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
      query HomeCards {
        homeCards {
          id
          name
          image
          description
          link
        }
      }
    `,
  });

  console.log("data", data);
  const cards = data.data.homeCards;

  return {
    props: {
      cards,
    },
  };
}
