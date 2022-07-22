import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async function addMember(memberData) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.QCB}`,
    },
  });

  // console.log("check", memberData.aboriginal);

  const newUser = await client.mutate({
    mutation: gql`
      mutation NewMember {
        createMember(
          data: {
            email: "${memberData.userEmail}",
            username: "${memberData.userName}",
            admin: false,
            verifiedMember: false,
            firstName: "${memberData.firstName}",
            lastName: "${memberData.lastName}",
            aboriginal: ${memberData.aboriginal},
            acceptEmails: true,
            dateOfBirth: "${memberData.dob}",
            emergencyContactName: "${memberData.eContact}",
            emergencyContactNumber: "${memberData.eMobile}",
            mobile: "${memberData.mobile}",
            nation: "${memberData.nation}",
            postcode: "${memberData.postCode}",
            southSeaIslander: ${memberData.ssi},
            suburb: "${memberData.suburb}",
            torresStraitIslander: ${memberData.tsi}
          }
        ) {
          aboriginal
          acceptEmails
          admin
          dateOfBirth
          email
          emergencyContactName
          emergencyContactNumber
          firstName
          lastName
          mobile
          nation
          postcode
          southSeaIslander
          suburb
          torresStraitIslander
          username
        }
      }
    `,
  });
}
