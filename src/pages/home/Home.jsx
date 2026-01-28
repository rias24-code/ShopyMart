import Hero from "./hero/Hero";
import WhyChooseUs from "./whychooseus/WhyChooseUs";
import React from "react";
import OfferProducts from "../home/offeredproduct/OfferProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <OfferProducts />
      <WhyChooseUs />
    </>
  );
};

export default Home;
