import React from "react";
import Footer from "../../common/Footer/Footer";
import Express from "../Express/Express";
import Hero from "../Hero/Hero";
import Product_Store from "../Product/Product_Store";
import Travel_Tours from "../Travel_Tours/Travel_Tours";

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero />
      <Express />
      {/* <ShopDelivery /> */}
      {/* <Product_Brand /> */}
      <Product_Store />
      <Travel_Tours />
      <Footer />
    </div>
  );
};

export default Home;
