import Navbar from "../components/Navbar";
import "styles/globals.css";
import Head from "next/head";
import UserLayout from "../layouts/UserLayout";
import { MoralisProvider } from "react-moralis";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || UserLayout;
  return (
    <>
      {/* <Head>
				<title>Krptonaut</title>
			</Head> */}

      <MoralisProvider initializeOnMount={false}>
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
