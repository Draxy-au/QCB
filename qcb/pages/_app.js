import Script from "next/script";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.scss";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="website_content">
      <div className="page_container">
        <Head>
          <title>QLD Camping Bears</title>
          <meta name="description" content="QLD Camping Bears website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="header">
          <Header />
        </div>
        <div className="page">
          <Component {...pageProps} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
