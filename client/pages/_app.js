import "styles/globals.css";
import Head from "next/head";
import UserLayout from "../layouts/UserLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, ...rest }) {
  const Layout = Component.layout || UserLayout;
  const { store, pageProps } = wrapper.useWrappedStore(rest);
  return (
    <>
      {/* <Head>
				<title>Krptonaut</title>
			</Head> */}

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
