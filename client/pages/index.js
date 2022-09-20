import Head from "next/head";
import Image from "next/image";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Support from "../components/Support";
import AllInOne from "../components/AllInOne";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Support />
			<AllInOne />
			<Pricing />
		</>
	);
}
