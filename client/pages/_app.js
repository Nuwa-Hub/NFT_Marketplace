import Navbar from "../components/Navbar";
import "styles/globals.css";
import Head from "next/head";
import UserLayout from "../layouts/UserLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || UserLayout;
  return (
    <>
      {/* <Head>
				<title>Krptonaut</title>
			</Head> */}

      <Provider store={store}>
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
