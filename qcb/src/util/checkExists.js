import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async function checkExists(field, value) {
  console.log("Field:", field);
  console.log("value:", value);

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  switch (field) {
    case "email":
      const email_data = await client.query({
        query: gql`
          query PageMember {
            members(where: {email: "${value}"}, first: 1) {
              email
            }
          }
        `,
      });
      const email_member = email_data.data.members;

      if (email_member.length < 1) {
        console.log("No matching emails");
        return false;
      }
      console.log("Email Matched! Returning True.");
      return true;
      break;

    case "username":
      const username_data = await client.query({
        query: gql`
          query PageMember {
            members(where: {username: "${value}"}, first: 1) {
              username
            }
          }
        `,
      });
      const username_member = username_data.data.members;

      if (username_member.length > 0 && username_member[0].username == value) {
        console.log("Username Check - Returning true");
        return true;
      }
      console.log("Username Check - Returning false");
      return false;
      break;
    default:
      break;
  }
}
