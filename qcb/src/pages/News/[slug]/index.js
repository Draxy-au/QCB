import { getSession, useSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import styles from "./NewsPost.module.scss";

export default function NewsPost({ post }) {
  return (
    <div className={styles.news_post_container}>
      <h1>News Post</h1>
      <p>{post.name}</p>
      <p>{post.date}</p>
      <p>{post.member.username}</p>
      <div dangerouslySetInnerHTML={post.content.html} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/Members/Portal",
      },
    };
  }

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
