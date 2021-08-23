import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import HeroNav from "./HeroNav";

const heroslider = [
  {
    img: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const Hero = () => {
  return (
    <div>
      <section className="hero_wrap sticky_header">
        <div className="container-fluid g-0">
          <div className="hero_inner_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="row">
                {/* hero nav left  */}
                <HeroNav />
                {/* hero nav left  */}
                <div className="col-xxl-9 col-xl-9">
                  <div className="hero_content_wrap">
                    {/* hero top slider  */}
                    <div className="hero_top_slider">
                      <ReactOwlCarousel
                        items={1}
                        className="hero_slider_items owl-carousel"
                      >
                        {heroslider.map((heroslider, i) => (
                          <div
                            key={i}
                            className="hero_slider_single_item"
                            heroslider={heroslider}
                          >
                            <a href="#">
                              <img
                                src={heroslider.img}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                        ))}
                      </ReactOwlCarousel>
                    </div>
                    {/* hero top slider  */}
                    {/* mobile hero feature */}
                    <div className="mobile_hero_feature">
                      <div className="feature_single_item">
                        <img src="assets/img/icon/newsfeed.png" alt="" />
                        <p>Newsfeed</p>
                      </div>
                      <div className="feature_single_item">
                        <img src="assets/img/icon/gift_cards.png" alt="" />
                        <p>Gift Cards</p>
                      </div>
                      <div className="feature_single_item">
                        <img src="assets/img/icon/campaign.png" alt="" />
                        <p>campaign</p>
                      </div>
                      <div className="feature_single_item">
                        <img src="assets/img/icon/orders.png" alt="" />
                        <p>Orders</p>
                      </div>
                    </div>
                    {/* mobile hero feature */}
                    {/* hero top slider  */}
                    <div className="hero_bottom_image">
                      <div className="on_going_campaign">
                        <h4>Ongoing Campaigns</h4>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="hero_bottom_img bg-1">
                            <img
                              src="assets/img/hero-bottom-img-2.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="hero_bottom_img">
                            <img
                              src="assets/img/hero-bottom-img-2.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
