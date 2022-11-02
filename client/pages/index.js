import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import React from "react";

import Hero from "../components/Hero";
import SlideShow from "../components/SlideShow";
import Trending from "../components/Trending";

export default function Home() {
  const { useState } = React;

  return (
    <div className="bg-zinc-200">
      <Head>
        <title>Kryptonaut</title>
      </Head>
       <Hero />
     {/* <SwiperSlider />  */}
      <SlideShow /> 
      {/* <Trending />  */}
    </div>
  );
}
