import React from "react";
// import { express } from "../Express/Express";

const StoreDetails = () => {
  // const { cart } = useContext(ShoppingCart);
  // const { key } = useParams();
  // const store = ShopData.find((i) => i.key === key);
  // console.log(store);
  return (
    <>
      {/* hero area  */}
      <section className="hero_wrap ">
        <div className="container-fluid g-0">
          <div className="hero_inner_wrap">
            <div className="container-xxl container-md container-fluid">
              <div className="row">
                {/* hero nav left  */}
                <div className="col-xl-3">
                  <div className="hero_nav_item_wrap">
                    <ul>
                      <li>
                        <a href="#/">
                          Desktop
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Laptop
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Men's Watch
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Microwave Oven
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Motor Bike
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Refrigerator
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Smart Phone
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Smart TV &amp; Android TV
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Speaker
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          Split AC
                          <span>
                            <i className="fal fa-angle-right" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* hero nav left  */}
                <div className="col-xxl-9 col-xl-9">
                  <div className="hero_content_wrap">
                    {/* product area  */}
                    <section className="product_wrap">
                      <div className="container-fluid g-0">
                        <div className="product_inner_wrap">
                          <div className="container-xxl container-md container-fluid">
                            <div className="product_title shop_stor_title">
                              <h4>Shop By Store</h4>
                              <span>
                                <div className="search_box ">
                                  <input
                                    type="search"
                                    name
                                    id
                                    placeholder="Search..."
                                  />
                                  <button type="submit">
                                    <i className="fal fa-search" />
                                  </button>
                                </div>
                                <div className="select_available_shop_list">
                                  <nav className="navbar">
                                    <div className="container-fluid">
                                      <div className="dropdown">
                                        <button
                                          className="btn dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="fal fa-filter" />
                                        </button>
                                        <ul
                                          className="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton1"
                                        >
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#/"
                                            >
                                              Action
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#/"
                                            >
                                              Another action
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#/"
                                            >
                                              Something else here
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </nav>
                                </div>
                              </span>
                            </div>
                            <div className="product_items_wrap">
                              <div className="row g-0">
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <a href="#/">
                                          <img
                                            className="img-fluid"
                                            src="assets/img/brand-1.jpg"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">
                                            Lorem ipsum dolor sit amet
                                            consectetur,
                                          </a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-4.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-5.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-6.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-7.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-8.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-9.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-10.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-11.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                                {/* single product cart  */}
                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                  <div className="product_single_items_wrap">
                                    <div className="product_single_item">
                                      <div className="product_single_top">
                                        <img
                                          className="img-fluid"
                                          src="assets/img/brand-12.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="product_single_bottom">
                                        <div className="product_title">
                                          <a href="#/">Product Name</a>
                                        </div>
                                        <div className="product_price">
                                          <span>৳ ২০০০০</span>
                                          <span>
                                            <del>৳ ২২০০০</del>
                                          </span>
                                        </div>
                                        <div className="shop_checkout_btn">
                                          <button>
                                            <i className="fal fa-shopping-cart" />
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* single product cart  */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* product area  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero area  */}
    </>
  );
};

export default StoreDetails;
