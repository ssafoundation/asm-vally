import React from "react";
import Footer from "../../common/Footer/Footer";
import Express from "../Express/Express";
import Hero from "../Hero/Hero";
import ProductStore from "../Product/ProductStore";
import TravelTours from "../TravelTours/TravelTours";

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero />
      <Express />
      {/* <ShopDelivery /> */}
      {/* <Product_Brand /> */}
      <ProductStore />
      <TravelTours />
      <Footer />
    </div>
  );
};

export default Home;
