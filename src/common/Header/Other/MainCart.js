import React from "react";

const MainCart = () => {
  return (
    <>
      <section className="main_cart_wrap">
        <div className="container-fluid g-0">
          <div className="main_navbar_inner">
            <div className="cart_toggle_bg"></div>
            <div className="navbar_items_area">
              <div className="cart_item_inner_wrap">
                <div className="cart_item_header">
                  <div className="cart_hide_btn">
                    <i className="fal fa-times"></i>
                  </div>
                  <p>My cart</p>
                </div>
                <div className="cart_item_body">
                  <div className="shop_cart_inner_item">
                    <span>
                      <i className="far fa-shopping-bag"></i>
                    </span>
                    <p>Your cart is Empty!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCart;
