import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer";
import { useUserContext } from "../context/userContext";

export default function Home({ data }) {
  const { fetchedData, setData } = useUserContext();
  setData(data);

  return (
    <>
      <Head>
        <link
          nes=""
          rel="icon"
          sizes="192x192"
          href="https://www.nike.com/android-icon-192x192.png"
        />
        <title>Nike. Just Do It. Nike IN</title>
      </Head>
      <div className=" overflow-x-hidden">
        {/* {data.map((res, id) => {
        if (res.source == "kids-shoes") {
          return (
            <div key={id}>
              {res.title}
              <img className="rounded-lg" src={res.img} alt="" />
              <p>Price : {res.price}</p>
            </div>
          );
        }
      })} */}
        <Header data={data} />
        <HomeComponent data={data} />

        <Footer />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://nike-products.p.rapidapi.com/shoes", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "nike-products.p.rapidapi.com",
      "x-rapidapi-key": "54f72a345bmshf722caaee3d561fp12cc5fjsnc70de93f3f71",
    },
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
