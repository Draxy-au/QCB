import Navbar from "../../components/Navbar";
import styles from "./About.module.scss";

export default function index() {
  return (
    <div className={styles.about_container}>
      <Navbar current={"about_us"} />
      <div>About Us</div>
      <div>
        We are a LGBTIQ+ social organisation in South East Queensland, founded
        in 2020 to facilitate recreational camping and fun events throughout the
        Qld region. While we are founded by local members of the Bear Community,
        we welcome everyone within LGBTQIA+ community. We will always aim to
        provide a safe and comfortable environment for our members so we can
        socialise and meet other members of the LGBTQIA+ community and make new
        friends. You don’t have to be big, hairy or bearded to be welcomed by
        us. We at QLD Camping Bears acknowledge Aboriginal and Torres Strait
        Islanders as the original custodians of the land in which we reside.
      </div>
      <div>We Are One Family</div>
      <div>
        There have been instances in the past where attitudes have been shown
        which do not align with what we strive to be, attitudes which belong
        firmly in the past. We aim to move beyond these and forward to a more
        open, friendly and inviting community. Any vilification of any person by
        age, gender, orientation, size, race, or any form of personal shaming to
        any member, guest or venue employee will not be accepted. Equality,
        acceptance and kindness should be the norm, not the exception. As a
        group, we are a minority within a minority, we should never be putting
        down others, but raising everyone up to a higher standard and being
        respectful at all times. The Qld Camping Bears committee, as always,
        reserves the right to discipline any member found breaching these
        guidelines as per the Qld Camping Bears constitution. Any non-members be
        found to be breaching the above may be asked to leave any of our private
        events. If you ever feel uncomfortable at any of our events, please feel
        free to see one of our committee members immediately, who will always be
        wearing either a committee shirt or a committee badge and we will
        address your concerns as best we can. If you wish to submit any details
        via email or anonymously, you can do so through the contact form on our
        website.
      </div>
    </div>
  );
}
