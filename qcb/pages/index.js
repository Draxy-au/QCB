import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Homepage from "../pages/Homepage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <Head>
          <title>QLD Camping Bears</title>
          <meta name="description" content="QLD Camping Bears website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />
          <Homepage />
        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
