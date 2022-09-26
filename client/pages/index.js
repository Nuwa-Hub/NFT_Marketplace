import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import React from "react";

import Hero from "../components/Hero";
import Trending from "../components/Trending";
export default function Home() {
  const { useState } = React;
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };
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
