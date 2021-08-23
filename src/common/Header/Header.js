import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
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
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
