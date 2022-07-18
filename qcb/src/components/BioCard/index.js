import Image from "next/image";

import styles from "./BioCard.module.scss";

export const BioCard = ({ photo, name, description, flip = false }) => {
  return (
    <div className={styles.biocard_container}>
      {flip && (
        <>
          <div className={styles.info}>
            <div className={`className="pages" ${styles.name_flip}`}>
              <h1>{name}</h1>
            </div>
            <div className={`${styles.description_flip}`}>
              <div
                className="pages"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
            <div className={styles.seperator_bar_flip}>
              <hr />
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
            <div className={`className="pages"  ${styles.name}`}>
              <h1>{name}</h1>
            </div>
            <div className={`${styles.description}`}>
              <div
                className="pages"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
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
