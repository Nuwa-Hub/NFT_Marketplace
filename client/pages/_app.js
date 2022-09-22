import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import UserLayout from "../layouts/UserLayout";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || UserLayout;
  return (
    <>
      {/* <Head>
				<title>Krptonaut</title>
			</Head> */}

      <MoralisProvider initializeOnMount={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
