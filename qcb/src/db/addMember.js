import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import emailjs from "@emailjs/browser";

export default async function addMember(memberData) {
  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_QCB}`,
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

  if (newUser) {
    var templateParams = {
      to_name: "QLD CAMPING BEARS",
      from_name: "Website Admin",
      message_html: `New Account Created for ${memberData.userEmail}`,
    };
    emailjs
      .sendForm(
        "service_c4m64ap",
        "template_7w8f1hl",
        templateParams,
        "nZ3LPq50mjcBCplJA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    return true;
  } else {
    return false;
  }
}
