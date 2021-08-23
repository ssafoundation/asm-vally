import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import ShopData from "./ShopData";
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

// const shop_delivery = [
//   {
//     img: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     name: "Laptop",
//     id: 1,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//     name: "Mobile",
//     id: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80",
//     name: "Monitor",
//     id: 3,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
//     name: "Pc",
//     id: 4,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     name: "Laptop",
//     id: 1,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//     name: "Mobile",
//     id: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80",
//     name: "Monitor",
//     id: 3,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
//     name: "Pc",
//     id: 4,
//   },
// ];
const ShopDelivery = () => {
  return (
    <>
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
                {ShopData.map((shop_delivery, i) => (
                  <div
                    key={i}
                    className="express_single_item"
                    shop_delivery={shop_delivery}
                  >
                    <Link to={"/" + shop_delivery.key}>
                      <img
                        src={shop_delivery.img}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    {/* <a href="#">
                      <img
                        src={shop_delivery.img}
                        className="img-fluid"
                        alt=""
                      />
                    </a> */}
                  </div>
                ))}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* product express area  */}
    </>
  );
};

export default ShopDelivery;
