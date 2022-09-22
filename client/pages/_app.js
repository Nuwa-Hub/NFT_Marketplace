import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
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
