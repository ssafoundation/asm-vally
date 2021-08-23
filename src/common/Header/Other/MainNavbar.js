import React from "react";

const MainNavbar = () => {
  return (
    <div>
      <nav className="main_navbar_wrap">
        <div className="container-fluid g-0">
          <div className="main_navbar_inner">
            <div className="navbar_toggle_bg"></div>
            <div className="navbar_items_area">
              <div className="navbar_login_area">
                <a href="#/" className="btn">
                  Login
                </a>
              </div>
              <div className="navbar_items_wrap">
                <ul>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Order
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Gift card
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Mobile Top Up
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Followed Shops
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Shops
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Evaly Express Shops
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      News Feed
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Career
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      Career
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#/">
                      <span>
                        <i className="fal fa-list-alt"></i>
                      </span>
                      bKash payment
                    </a>
                    <span>
                      <i className="fal fa-angle-right"></i>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="navbar_bottom">
                <div className="navbar_important_link">
                  <a href="#/">About Us ·</a>
                  <a href="#/">Contact us ·</a>
                  <a href="#/">Privacy Policy ·</a>
                  <a href="#/">Purchasing Policy · </a>
                  <a href="#/">Cookie Policy ·</a>
                  <a href="#/">Terms & Conditions ·</a>
                  <a href="#/">Returns and Replacement</a>
                </div>
                <p>&copy; E-valy.com Limited 2021</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
