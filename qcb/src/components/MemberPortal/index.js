import styles from "./MemberPortal.module.scss";

export const MemberPortal = ({ memberData }) => {
  return (
    <div className={styles.member_portal_container}>
      <div className="pages">
        <h1>Member Portal</h1>
        <p>Welcome to the Member Portal, {memberData.username}</p>
      </div>
    </div>
  );
};
