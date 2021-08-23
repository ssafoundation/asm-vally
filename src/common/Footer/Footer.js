import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer area  */}
      <footer className="footer_main_wrap">
        <div className="container-fluid g-0">
          <div className="footer_top_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="footer_top_inner_wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer_single_item_wrap">
                      <div className="company_about">
                        <img src="assets/img/icon/evaly.png" alt="" />
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, commodi est! Ex, debitis facere
                          officia corporis sed ipsum maiores eius adipisci
                          magnam? Delectus sit fugit incidunt sequi veniam modi
                          sint. Lorem, ipsum dolor sit amet consectetur
                          adipisicing elit. Inventore, commodi est! Ex, debitis
                          facere officia corporis sed ipsum maiores eius
                          adipisci magnam? Delectus sit fugit incidunt sequi
                          veniam modi sint.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer_single_item_wrap">
                      <div className="footer_single_title">
                        <h4>Menu</h4>
                      </div>
                      <div className="footer_important_link">
                        <ul>
                          <li>
                            <a href="/#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/#">Cookie Policy</a>
                          </li>
                          <li>
                            <a href="/#">Purchasing Policy</a>
                          </li>
                          <li>
                            <a href="/#">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="/#">Career</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer_single_item_wrap">
                      <div className="footer_single_title">
                        <h4>Contact Us</h4>
                      </div>
                      <div className="footer_important_link">
                        <p>House /#8, Road /# 14, Dhanmondi, Dhaka-1209.</p>
                        <p>Email: support@evaly.com.bd</p>
                        <p>Contact no: 09638111666</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer_single_item_wrap">
                      <div className="footer_single_title">
                        <h4>Get in Touch</h4>
                      </div>
                      <div className="footer_important_link">
                        <a href="/#">
                          <i className="fab fa-facebook-square" />
                        </a>
                        <a href="/#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="/#">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                      <a href="/#">
                        <img src="assets/img/footer_image.png" alt="" />
                      </a>
                      <a href="/#">
                        <img src="assets/img/apple_store.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl container-md container-fluid">
            <div className="footer_bottom_wrap">
              <div className="copy_right_text">
                <p>© 2021 E-valy.com Limited. All rights reserved.</p>
              </div>
              <div className="footer_bottom_social_area">
                <a href="/#">
                  <i className="fab fa-facebook-square" />
                </a>
                <a href="/#">
                  <i className="fab fa-twitter-square" />
                </a>
                <a href="/#">
                  <i className="fab fa-instagram-square" />
                </a>
                <a href="/#">
                  <i className="fab fa-youtube-square" />
                </a>
              </div>
              <div className="payment_getaway my-auto">
                <img
                  src="payment_icon/payment_icon.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
