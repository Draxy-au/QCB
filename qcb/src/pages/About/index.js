import Navbar from "@components/Navbar";
import styles from "./About.module.scss";

export default function index() {
  return (
    <div className={styles.about_container}>
      <Navbar current={"About Us"} />
      <div className={styles.title_1}>About Us</div>
      <div className={styles.normal_text}>
        <p>
          We are a LGBTIQ+ social organisation in South East Queensland, founded
          in 2020 to facilitate recreational camping and fun events throughout
          the Qld region.
        </p>
        <p>
          While we are founded by local members of the Bear Community, we
          welcome everyone within LGBTQIA+ community. We will always aim to
          provide a safe and comfortable environment for our members so we can
          socialise and meet other members of the LGBTQIA+ community and make
          new friends.
        </p>
        <p>You don’t have to be big, hairy or bearded to be welcomed by us.</p>
        <p>
          We at QLD Camping Bears acknowledge Aboriginal and Torres Strait
          Islanders as the original custodians of the land in which we reside.
        </p>
      </div>
      <div className={styles.title_1}>We Are One Family</div>
      <div className={styles.normal_text}>
        <p>
          We here at QLD Camping Bears have a zero tolerance policy for anybody
          who brings an attitude towards individuals that we believe belongs
          firmly in the past.
        </p>
        <p>
          Any vilification of any person by age, gender, orientation, size,
          race, or any form of personal shaming to any member, guest or venue
          employee will not be accepted.
        </p>
        <p>
          Equality, acceptance and kindness should be the norm, not the
          exception. As a group, we are a minority, and therefore we should
          never be putting down others, but raising everyone up to a higher
          standard and being respectful at all times.
        </p>
        <p>
          Under no circumstances are you to enter or access another persons
          property (entering into someone’s tent, van, vehicle or cabin) without
          the owners expressed permission.
        </p>
        <p>
          The Qld Camping Bears committee, as always, reserves the right to
          revoke your membership at our discretion at any time if you are found
          to be breaching these guidelines as per our terms and conditions.
        </p>
        <p>
          Any guests or members found to be breaching the terms and conditions
          may be asked to leave any of our private events and no refunds will be
          offered for any funds received.
        </p>
        <p>
          If you ever feel uncomfortable at any of our events, please feel free
          to see one of our committee members immediately, and we will address
          your concerns as best we can.
        </p>
        <p>
          If you wish to submit any details via email or anonymously, you can do
          so through the contact form on our website.
        </p>
      </div>
    </div>
  );
}
