import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Header from "@components/Header";
import Flag from "@components/Flags";
import Footer from "@components/Footer";
import "@styles/globals.scss";
import "@styles/app.scss";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps, session }) {
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
        <CartProvider>
          <div className="page">
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
            <Flag />
          </div>
        </CartProvider>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
