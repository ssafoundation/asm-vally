import React, { useContext } from "react";
import { ShoppingCart } from "../../../context/CartProvider";

const ProductAddCart = () => {
  const { cart, setCart } = useContext(ShoppingCart);
  const productDel = (key) => {
    const filterCart = cart.filter((i) => i.key != key);
    setCart(filterCart);
  };
  // console.log(productDel);
  return (
    <>
      <section className="main_cart_wrap after_product_added">
        <div className="container-fluid g-0">
          <div className="main_navbar_inner">
            <div className="cart_toggle_bg" />
            <div className="navbar_items_area">
              <div className="cart_item_inner_wrap">
                <div className="cart_item_header">
                  <div className="cart_hide_btn">
                    <i className="fal fa-times" />
                  </div>
                  <p>My cart</p>
                </div>
                <div className="cart_item_body added_product_body">
                  <div className="added_product_body_inner_wrap">
                    {cart.map((card, i) => (
                      <div key={i} className="shop_cart_added_product">
                        <div className="added_product_image_left">
                          <img src={card.img} alt="" />
                        </div>
                        <div className="added_product_content_right">
                          <h4>{card.seller}</h4>
                          <div className="added_product_quantity">
                            <div className="added_product_quantity_left">
                              <p>
                                <span>{card.price}</span> x
                                <span className="added_quantity">1</span>
                              </p>
                            </div>
                            <div className="added_product_quantity_right">
                              <span onClick={() => productDel(card.key)}>
                                <i className="fal fa-trash-alt" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* product count  */}
                  <div className="shop_price_count_bottom">
                    <div className="sub_total_price">
                      <p>Subtotal</p>
                      <p>$100</p>
                    </div>
                    <div className="total_product_price">
                      <p>Subtotal</p>
                      <p>$100</p>
                    </div>
                    <div className="checkout_btn">
                      <button>
                        Proceed To checkout
                        <i className="fal fa-shopping-cart" />
                      </button>
                    </div>
                  </div>
                  {/* product count  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAddCart;
