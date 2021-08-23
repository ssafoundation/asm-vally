import React from "react";

const Header_Bottom = () => {
  return (
    <>
      <div className="header_bottom_wrap">
        <div className="container-xxl container-md container-fluid">
          <div className="header_bottom_inner_wrap">
            <div className="row">
              <div className="col-lg-3 col-md-3 my-auto">
                <div className="nav_category_wrap d-flex">
                  <div className="category_btn">
                    <i className="fal fa-bars"></i>
                  </div>
                  <div className="category_title">
                    <h3>
                      CATEGORIES
                      <span>
                        <i className="fal fa-angle-down"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-7 my-auto">
                <div className="header_bottom_navbar_wrap">
                  <div className="header_bottom_navbar">
                    <ul>
                      <li>
                        <a href="/#">All Shops</a>
                      </li>
                      <li>
                        <a href="/#">Gift Card</a>
                      </li>
                      <li>
                        <a href="/#">Campaigns</a>
                      </li>
                      <li>
                        <a href="/#">Top-up</a>
                      </li>
                      <li>
                        <a href="/#">Express</a>
                      </li>
                      <li>
                        <a href="/#">T10</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 my-auto">
                <div className="header_bottom_right_wrap">
                  <div className="header_bottom_navbar_right">
                    <ul>
                      <li>
                        <a href="/#">All Shops</a>
                      </li>
                      <li>
                        <a href="/#">Gift Card</a>
                      </li>
                      <li>
                        <a href="/#">Campaigns</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header_right_toggle_btn">
                    <i className="fal fa-ellipsis-v"></i>
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

export default Header_Bottom;
