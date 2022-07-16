import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Navbar from "@components/Navbar";

import styles from "./Shop.module.scss";

import cart_icon from "@assets/icons/cart.svg";
import Link from "next/link";

export default function Shop({ home, products }) {
  const { heroTitle, heroText, heroLink, heroBackground } = home;

  return (
    <div className={styles.shoppage_container}>
      <Navbar current={"Shop"} />

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
        <div className={styles.cart}>
          Total: $0.00
          <Image height={"30px"} width={"30px"} src={cart_icon} alt="cart" />
        </div>
        {products?.map((product) => (
          <div key={product.slug} className={styles.product}>
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
          heroBackground {
            url
            width
            height
          }
        }
        products(first: 6) {
          name
          price
          slug
          image {
            height
            width
            url
          }
        }
      }
    `,
  });

  console.log("Data: ", data);
  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products,
    },
  };
}
