import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import React from "react";

import Hero from "../components/Hero";
import Trending from "../components/Trending";
export default function Home() {
  const { useState } = React;
 
  return (
    <div>

      <Head>
        <title>Kryptonaut</title>
      </Head>
      <Hero />
      <Trending />
    </div>
  );
}
