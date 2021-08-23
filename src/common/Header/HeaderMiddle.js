import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../../context/CartProvider";

const Header_Middle = () => {
  const { cart } = useContext(ShoppingCart);
  return (
    <>
      <div className="header_middle_wrap">
        <div className="container-xxl container-md container-fluid">
          <div className="header-middle-wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 my-auto">
                <div className="emart-brand">
                  <h2>
                    <Link to="/">ASM Vally</Link>
                  </h2>
                  <div className="responsive_toggle_btn">
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-11 col-11 my-auto">
                <div className="header_middle_main_search">
                  <div className="header_search_wrap">
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="fal fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="header_middle_profile_wrap">
                  <div className="shop_cart_wrap">
                    <span>
                      <i className="fal fa-cart-plus"></i>
                    </span>
                    <span className="notification_show">{cart?.length}</span>
                    <h4>Cart</h4>
                  </div>
                  <div className="notification_wrap">
                    <a data-bs-toggle="modal" href="#modal" role="button">
                      <span>
                        <i className="fal fa-bell"></i>
                      </span>

                      <span className="notification_show">1</span>
                    </a>

                    <h4>Notification</h4>
                    <div
                      className="modal fade"
                      id="modal"
                      aria-hidden="true"
                      aria-labelledby="..."
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered modal__main__wrap">
                        <div className="modal-content ">
                          <div className="modal-header">
                            <h5 className="modal-title">Notification</h5>
                          </div>
                          <div className="modal-body">
                            <h6>Notification</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="site_logo_responsive_icon">
                    <h3>
                      <img
                        src="assets/img/evaly-logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </h3>
                  </div>
                  <div className="massage_wrap">
                    <a data-bs-toggle="modal" href="#modal2" role="button">
                      <span>
                        <i className="fal fa-comment-alt"></i>
                      </span>
                      <span className="notification_show">1</span>
                    </a>
                    <h4>Massage</h4>

                    <div
                      className="modal fade"
                      id="modal2"
                      aria-hidden="true"
                      aria-labelledby="..."
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered modal__main__wrap">
                        <div className="modal-content ">
                          <div className="modal-header">
                            <h5 className="modal-title">Chat</h5>
                          </div>
                          <div className="modal-body">
                            <h5>Massage</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="account_wrap">
                    <a data-bs-toggle="modal" href="#modal3" role="button">
                      <span>
                        <i className="fal fa-user"></i>
                      </span>
                    </a>
                    <h4>Profile</h4>

                    <div
                      className="modal fade"
                      id="modal3"
                      aria-hidden="true"
                      aria-labelledby="..."
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered modal__main__wrap">
                        <div className="modal-content ">
                          <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label for="exampleInputEmail1">
                                  Phone number
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Enter your phone"
                                />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputPassword1">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Password"
                                />
                              </div>

                              <button
                                type="submit"
                                className="btn account_wrap_login_btn"
                              >
                                Login
                              </button>
                              <div className="account_reset_area">
                                <p>
                                  Don't have an account?
                                  <a href="/#">Sign up</a>
                                  <a href="/#">Forgot Password</a>
                                </p>
                              </div>
                            </form>
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
      </div>
    </>
  );
};

export default Header_Middle;
