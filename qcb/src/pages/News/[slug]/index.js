import { getSession, useSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./NewsPost.module.scss";
import Navbar from "@components/Navbar";
import Image from "next/image";

export default function NewsPost({ post }) {
  const goBack = () => {
    router.push("/Members/Portal/Dashboard");
  };

  return (
    <div className={styles.news_post_container}>
      <Navbar current="Members" />
      <div className="pages">
        <div className={styles.back}>
          <button className={styles.back_button} onClick={() => goBack()}>
            &#xab; Back
          </button>
        </div>
        <h1>{post.name}</h1>
        <p>
          <span className={styles.date}>{post.date}</span> -{" "}
          <span className={styles.author}>@{post.member.username}</span>
        </p>
        {post.image && (
          <div className={styles.image}>
            <Image
              src={post.image.url}
              alt={post.name}
              height={436}
              width={833}
            />
          </div>
        )}
        <span className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.html,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/Members/Portal",
  //     },
  //   };
  // }

  const slug = params.slug;

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const post_data = await client.query({
    query: gql`
        query Post {
          post(where: {slug: "${slug}"}) {
            date
            id
            image
            name
            content {
              html
            }
            member {
              username
            }
            slug
          }
        },
          `,
  });

  const post = post_data.data.post;

  return {
    props: {
      post,
    },
  };
}
