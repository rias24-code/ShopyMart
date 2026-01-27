import Hero from "./hero/Hero";
import OfferProducts from "../home/offeredproduct/OfferProducts";
import WhyChooseUs from "./whychooseus/WhyChooseUs";
import React from "react";

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
