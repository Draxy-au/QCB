import Image from "next/image";

import styles from "./BioCard.module.scss";

export const BioCard = ({ photo, name, description, flip = false }) => {
  return (
    <div className={styles.biocard_container}>
      {flip && (
        <>
          <div className={styles.info}>
            <div className={`${styles.title_1} ${styles.name_flip}`}>
              {name}
            </div>
            <div className={`${styles.normal_text} ${styles.description_flip}`}>
              {description}
            </div>
          </div>
          <div className={styles.photo}>
            <Image src={photo} alt="" height={300} width={300} />
          </div>
        </>
      )}
      {!flip && (
        <>
          <div className={styles.photo}>
            <Image src={photo} alt="" height={300} width={300} />
          </div>
          <div className={styles.info}>
            <div className={`${styles.title_1} ${styles.name}`}>{name}</div>
            <div className={`${styles.normal_text} ${styles.description}`}>
              {description}
            </div>
            <div className={styles.seperator_bar}>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
