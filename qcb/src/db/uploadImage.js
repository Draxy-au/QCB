import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function uploadImage(memberEmail, filename) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_QCB}`,
    },
  });

  const updatedGallery = await client.mutate({
    mutation: gql`
      mutation UpdateEventMembers {
        createGalleryUpload(
          data: {
            filename: "${filename}"
            dateUploaded: "${new Date().toISOString()}"
            member: { connect: { email: "${memberEmail}" } }
          }
        )
      }
    `,
  });

  if (updatedGallery) {
    return true;
  } else {
    return false;
  }
}
