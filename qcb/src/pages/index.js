import Navbar from "@components/Navbar";
import Carousel from "@components/Carousel";
import Card from "@components/Card";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Home.module.scss";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home({ cards, slides }) {
  const [cardList, setCardList] = useState(cards);
  const [slideList, setSlideList] = useState(slides);
  const [slideImages, setSlideImages] = useState();
  const [slideLinks, setSlideLinks] = useState();

  useEffect(() => {
    setCardList(cards);
    setSlideList(slides);
  }, [cards, slides]);

  useEffect(() => {
    if (slideList?.length > 1) {
      setSlideImages(slideList.map((slide) => slide.image.url));
      setSlideLinks(slideList.map((slide) => slide.link));
    }
  }, [slideList]);

  return (
    <div className={styles.homepage_container}>
      <Navbar current="Home" />

      <div className={styles.content}>
        <div className={styles.carouselArea}>
          {slideImages && (
            <Carousel
              slides={slideImages}
              links={slideLinks}
              indicators
              controls
              interval={4000}
              autoPlay={true}
              width={1100}
            />
          )}
        </div>
        <div className={styles.cardArea}>
          {cardList?.map((card) => (
            <Link href={card.link} key={card.id}>
              <a>
                <Card
                  key={card.id}
                  cardImage={card.image.url}
                  text={card.description}
                />
              </a>
            </Link>
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
        slides {
          id
          name
          image
          link
        }
      }
    `,
  });

  const cards = data.data.homeCards;
  const slides = data.data.slides;

  return {
    props: {
      cards,
      slides,
    },
  };
}
