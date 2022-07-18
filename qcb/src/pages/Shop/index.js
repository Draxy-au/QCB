import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Navbar from "@components/Navbar";

import styles from "./Shop.module.scss";

import Link from "next/link";
import Cart from "@components/Cart";

export default function Shop({ home, products }) {
  const { heroTitle, heroText, heroLink, heroBackground } = home;

  return (
    <div className={styles.shoppage_container}>
      <Navbar current={"Shop"} />
      <Cart total_price={0} />

      <div className={styles.hero}>
        <Link href={heroLink}>
          <a>
            <div className={styles.heroContent}>
              <h2>{heroTitle}</h2>
              <p>{heroText}</p>
            </div>
            <img
              className={styles.heroImage}
              src={heroBackground.url}
              alt={heroTitle}
              height={heroBackground.height}
              width={heroBackground.width}
            />
          </a>
        </Link>
      </div>

      <div className={styles.products_container}>
        {products?.map((product) => (
          <div key={product.slug} className={styles.product}>
            <Link href={`/Shop/products/${product.slug}`}>
              <a>
                <div className={styles.product_image}>
                  <img
                    src={product.image.url}
                    height={250}
                    width={250}
                    alt={product.name}
                  />
                </div>
                <div className={styles.product_name}>{product.name}</div>
                <div className={styles.product_price}>${product.price}</div>
                <div className={styles.product_add}>
                  <button>Add to Cart</button>
                </div>
              </a>
            </Link>
          </div>
        ))}
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
      query PageHome {
        page(where: { slug: "home" }) {
          id
          heroLink
          heroText
          heroTitle
          name
          slug
          heroBackground
        }
        products(first: 6) {
          name
          price
          slug
          image
        }
      }
    `,
  });

  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products,
    },
  };
}
