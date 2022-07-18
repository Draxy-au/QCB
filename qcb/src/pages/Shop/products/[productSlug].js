import Navbar from "@components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./Products.module.scss";
import Head from "next/head";
import Button from "@components/Button";
import Cart from "@components/Cart";

export default function Products({ product }) {
  return (
    <>
      <Head key={product.slug}>
        <title>{product.name}</title>
        <meta
          name="description"
          content={`Find ${product.name} at QCB Shop.`}
        />
      </Head>
      <div className={styles.productspage_container}>
        <Navbar current={"Shop"} />

        <Cart total_price={0.0} />

        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <img
              src={product.image.url}
              height={350}
              width={350}
              alt={product.name}
            />
          </div>
          <div className={styles.productContent}>
            <h1>{product.name}</h1>
            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{
                __html: product.description.html,
              }}
            />

            <p className={styles.productPrice}>${product.price}</p>
            <p className={styles.productBuy}>
              <Button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-description={product.description}
                data-item-url={`/products/${product.slug}`}
                data-item-image={product.image.url}
                data-item-name={product.name}
              >
                Add to Cart
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageProduct($slug: String) {
        product(where: { slug: $slug }) {
          id
          image
          name
          price
          description {
            html
          }
          slug
        }
      }
    `,
    variables: {
      slug: params.productSlug,
    },
  });

  const product = data.data.product;

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageProducts {
        products {
          name
          price
          slug
          image
        }
      }
    `,
  });

  const paths = data.data.products.map((product) => {
    return {
      params: {
        productSlug: product.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
