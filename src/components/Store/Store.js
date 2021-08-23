import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { express } from "../Express/Express";
import ShopData from "../ShopDelivery/ShopData";
// import { express } from "../Express/express";
import "./store.css";
import StoreDetails from "./StoreDetails";
const Store = () => {
  // const { cart } = useContext(ShoppingCart);
  const { key } = useParams();
  const [store, setStore] = useState({});
  console.log();
  useEffect(() => {
    const store = ShopData.find((i) => i.key === key);
    setStore(store);
  }, [key]);
  // console.log(express);
  return (
    <>
      <div className="available_shop_store sticky_header">
        <div className="container-fluid g-0">
          <div className="available_shop_store_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="available_inner_shop_store">
                <div className="shop_single_profile">
                  <div className="shop_profile_left">
                    <img src={store?.img} alt="" />
                  </div>
                  <div className="shop_profile_right">
                    <h4>
                      {store?.seller}
                      <span>Cash on DELIVERY</span>
                    </h4>
                    <p>
                      236 New Elephant Rd, 236 New Elephant Rd, Dhaka 1205,
                      Bangladesh
                    </p>
                    <div className="shop_store_rating_wrap">
                      <div className="shop_store_review_left">
                        <span>
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                        </span>
                        <span>0|0 Review</span>
                      </div>
                      <div className="shop_store_contact_chat_wrap">
                        <button>
                          <a href="#">
                            <i className="fal fa-bell" /> Follow
                          </a>
                        </button>
                        <button>
                          <a href="tel:+4733378901">
                            <i className="fal fa-phone-alt" /> +4733378901
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoreDetails />
    </>
  );
};

export default Store;
