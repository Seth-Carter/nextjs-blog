import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";

import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
    </>
  );
};

export default Home;
