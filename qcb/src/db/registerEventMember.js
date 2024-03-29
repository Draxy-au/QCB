import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function registerEventMember(email, eventSlug) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_QCB}`,
    },
  });

  const updatedEvent = await client.mutate({
    mutation: gql`
      mutation UpdateEventMembers {
        updateEvent(
          where: {slug: "${eventSlug}"}
          data: {members: {connect: {where: {email: "${email}"}}}}
        ) {
          id
        }
        publishEvent(where: {slug: "${eventSlug}"}) {
          id
        }
      }
    `,
  });

  if (updatedEvent) {
    return true;
  } else {
    return false;
  }
}

export async function unregisterEventMember(email, eventSlug) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_QCB}`,
    },
  });

  const updatedEvent = await client.mutate({
    mutation: gql`
      mutation UpdateEventMembers {
        updateEvent(
          where: {slug: "${eventSlug}"}
          data: {members: {disconnect: {email: "${email}"}}}
        ) {
          id
        }
        publishEvent(where: {slug: "${eventSlug}"}) {
          id
        }
      }
    `,
  });

  if (updatedEvent) {
    return true;
  } else {
    return false;
  }
}
