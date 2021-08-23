import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart } from "../../context/CartProvider";
import "./product.css";
const SingleProduct = () => {
  const { cart, setCart } = useContext(ShoppingCart);
  const [single, setSingle] = useState();
  useEffect((product) => {
    const value = [...cart, product];
    setSingle(value);
  }, []);
  console.log(single);
  return (
    <div>
      <section className="product_page_wrap sticky_header">
        <div className="container-xxl container g-0">
          <div className="product_inner_page">
            {/* product details top  */}
            <div className="product_page_content">
              <div className="row">
                <div className="col-md-5">
                  <div className="product-detail-left">
                    <div className="sp-wrap">
                      <a href="assets/img/product/1_big.jpg">
                        <img src="assets/img/product/1_big.jpg" alt="" />
                      </a>
                      <a href="assets/img/product/2_big.jpg">
                        <img src="assets/img/product/2_tb.jpg" alt="" />
                      </a>
                      <a href="assets/img/product/3_big.jpg">
                        <img src="assets/img/product/3_tb.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-detail-right">
                    <div className="product_page_title">
                      <h2>Product Title</h2>
                    </div>
                    <div className="product_page_p_code">
                      <h4>SKU: JDFNSFNJF</h4>
                    </div>
                    <h5>
                      Brand :<span>Apple</span>
                      <span>Apple</span>
                      <span>Apple</span>
                    </h5>
                    <div className="product_page_product_price">
                      <h3>$110</h3>
                      <span>Lorem, ipsum dolor.</span>
                    </div>
                    <div className="product_page_select_product">
                      <div className="product_page_product_quantity">
                        <label htmlFor="cars">Quantity:</label>
                        <div className="counter">
                          <button
                            className="down"
                            onclick="decreaseCount(event, this)"
                          >
                            -
                          </button>
                          <input type="text" defaultValue={1} />
                          <button
                            className="up"
                            onclick="increaseCount(event, this)"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add_to_cart_btn_p">
                      <a href="#" className="addtocart btn">
                        {" "}
                        <i className="fal fa-shopping-cart" /> Add to Cart
                      </a>
                      <a href="#" className="addtocart btn">
                        {" "}
                        <i className="fal fa-heart" /> Wishlist
                      </a>
                    </div>
                    <div className="product_call_to_action_btn">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                      <h4>
                        <span className="phone_icon">
                          <i className="far fa-phone" />
                        </span>{" "}
                        +880123456789
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_warranty_right">
                    <div className="p_w_r_top">
                      <div className="p_w_r_top_title">
                        <h5>Warranty</h5>
                      </div>
                      <div className="p_w_r_top_content">
                        <img src="assets/img/icon/result.png" alt="" />
                        <span>100% authentic</span>
                      </div>
                    </div>
                    <div className="product_seller_name">
                      <p>Sold by</p>
                      <div className="seller_profile">
                        <div className="seller_logo">
                          <img src="assets/img/icon/seller_logo-1.png" alt="" />
                        </div>
                        <div className="seller_info">
                          <h4>Laptop</h4>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product details top  */}
            {/* product description  */}
            <div className="product_description">
              <h4>Product details</h4>
              <div className="p_d_content">
                <p>
                  Bragg Organic Raw Unfiltered Apple Cider Vinegar With The
                  'Mother' Unflavored Description
                </p>
                <p>
                  Contains No Preservatives Made with Organic Apples Naturally
                  Gluten-Free Bragg Organic Raw Apple Cider Vinegar is made from
                  delicious, healthy, organically grown apples. Raw Apple Cider
                  Vinegar is full of zesty natural goodness and contains the
                  amazing 'mother' of vinegar which occurs naturally as
                  connected strand-like chains of protein enzymes molecules and
                  is highly regarded throughout history. In 400 BC Hippocrates,
                  the Father of Medicine, used it for its amazing natural
                  qualities. Bragg's Organic Vinegar adds healthy, delicious
                  flavor to salads, veggies, and most foods. Tasty even
                  sprinkled over popcorn.
                </p>
                <p>
                  Delicious, ideal pick-me-up at home, work, sports, or gym.
                  perfect taken 3 times daily - upon arising, mid-morning, and
                  mid-afternoon. 1 to 2 tsp Bragg Organic Vinegar in 8 oz glass
                  Purified Water and (optional) to taste, 1 to 2 tsp Organic
                  Honey, 100% Maple Syrup. Blackstrap Molasses or 4 drops herb
                  Stevia.
                </p>
              </div>
              <div className="p_d_type_info">
                <ul>
                  <li>
                    <span className="p_d_type_left">Product Type</span>
                    <span className="p_d_type_right">Apple Cider Vinegar</span>
                  </li>
                  <li>
                    <span className="p_d_type_left">Capacity</span>
                    <span className="p_d_type_right">946ml</span>
                  </li>
                  <li>
                    <span className="p_d_type_left">Product Type</span>
                    <span className="p_d_type_right">Apple Cider Vinegar</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* product description  */}
            {/* available shop  */}
            <div className="available_shop_main_wrap">
              <div className="available_shop_title">
                <div className="available_shop_left">
                  <h3>Available Shops</h3>
                </div>
                <div className="available_shop_select">
                  <select id="cars">
                    <option value="volvo" selected>
                      Only
                    </option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="available_shop_wrap">
                <div className="available_shop_list">
                  <img src="assets/img/icon/seller_logo-1.png" alt="" />
                  <div className="available_shop_inner_wrap">
                    <span>
                      <span>
                        <h4>
                          <a href="#">Jomjom Traders</a>
                        </h4>
                        <p>Stock available</p>
                        <div className="available_shop_review">
                          <span>
                            <i className="fal fa-star" />
                          </span>
                          <span>
                            <i className="fal fa-star" />
                          </span>
                          <span>
                            <i className="fal fa-star" />
                          </span>
                          <span>
                            <i className="fal fa-star" />
                          </span>
                          <span>
                            <i className="fal fa-star" />
                          </span>
                        </div>
                        <span>
                          <div className="available_shop_profile">
                            <a href="#" className="available_chat_btn">
                              <i className="fal fa-comment" />
                              Chat
                            </a>
                            <a href="#" className="available_buy_btn">
                              <i className="fal fa-shopping-cart" />
                              Buy Now
                            </a>
                          </div>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* available shop  */}
            {/*related available product  */}
            <div className="available_related_product_wrap">
              <h3>Related Products</h3>
              <div className="available_related_product">
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-10.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-6.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-8.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-9.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-11.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-12.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
                {/* single related product  */}
                <div className="single_available_related_product">
                  <img src="assets/img/brand-7.jpg" alt="" />
                  <a href="#">Related Product</a>
                  <div className="related_product_price">
                    <del>$400</del>
                    <span>$300</span>
                  </div>
                </div>
                {/* single related product  */}
              </div>
            </div>
            {/*related available product  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
