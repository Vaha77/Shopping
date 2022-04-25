import React from "react";
import { FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />
      console.log(bannerData);
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variants</p>
      </div>
      <div className="products-container">
        {products?.map((prodact) => prodact.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "product"]';
  const bannerData = await client.fetch(query);

  bannerQuery;

  return {
    props: { products, bannerData },
  };
};

export default Home;
