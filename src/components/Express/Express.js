import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import ShopData from "../ShopDelivery/ShopData";
const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 4,
      nav: true,
    },
    575: {
      items: 5,
      nav: true,
    },
    768: {
      items: 6,
      nav: true,
    },
    992: {
      items: 6,
      nav: true,
      loop: false,
    },
    1100: {
      items: 7,
      nav: true,
      loop: false,
    },
    1200: {
      items: 8,
      nav: true,
      loop: false,
    },
    1320: {
      items: 8,
      nav: true,
      loop: false,
    },
  },
};

const Express = () => {
  // const { cart } = useContext(ShoppingCart);
  return (
    <div>
      {/* product express area  */}
      <section className="product_express_wrap">
        <div className="container-fluid g-0">
          <div className="product_express_inner_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="express_product_title">
                <h3>Express Product</h3>
                <a href="#">See All</a>
              </div>
              <ReactOwlCarousel
                {...options}
                className="express_items_wrap owl-carousel"
              >
                {ShopData.map((express, i) => (
                  <div
                    key={i}
                    className="express_single_item"
                    express={express}
                  >
                    <Link to={"/" + express.key}>
                      <img src={express.img} className="img-fluid" alt="" />
                    </Link>
                  </div>
                ))}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* product express area  */}
    </div>
  );
};

export default Express;
