import React from "react";
import Header_Bottom from "./Header_Bottom";
import Header_Middle from "./Header_Middle";
import Header_Top from "./Header_Top";
import MainCart from "./Other/MainCart";
import MainNavbar from "./Other/MainNavbar";
import ProductAddCart from "./Other/ProductAddCart";

const Header = () => {
  return (
    <>
      <MainCart />
      <ProductAddCart />
      <MainNavbar />
      <header className="header-main-area">
        <div className="container-fluid g-0">
          <div className="header-padding-area">
            <Header_Top />
            <Header_Middle />
            <Header_Bottom />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
